import React, { createContext, useContext, useReducer } from "react";
const login_Context = createContext();

const base_url = "http://localhost:1002";
const loginInitialState = {
  isLoading: false,
  error: "",
  data: [],
  current_user: [],
};
function reducer(state, action) {
  switch (action.type) {
    case "user/created":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case "user/loading":
      return {
        ...state,
        isLoading: true,
      };
    case "current_user/loaded":
      return {
        ...state,
        current_user: action.payload,
        isLoading: false,
      };
    case "user/error":
      return {
        ...state,
        isLoading: true,
        error: action.payload,
        current_user: [],
        data: [],
      };
    case "user/data_loaded":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
function LoginContext({ children }) {
  const [{ error, isLoading, data, current_user }, dispatch] = useReducer(
    reducer,
    loginInitialState
  );

  async function createUser(newUser) {
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`${base_url}/login`, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({ type: "user/created", payload: data });
    } catch {
      dispatch({
        type: "user/error",
        payload: "There is some error in loading the data",
      });
    }
  }

  async function getCurrUser(login_data) {
    try {
      dispatch({ type: "user/loading" });

      //  loading the data

      const res = await fetch(`${base_url}/login/${login_data.id}`);
      const result = await res.json();

      console.log(result.length);

      //  checking if the length is zero or not, if zero user doesnt exist.
      if (result.length === 0) {
        console.log("");
        dispatch({
          type: "user/error",
          payload: "user does not exist, please create id",
        });
        return;
      }
      //   checking if the passsword is same or not.
      else if (result.password !== login_data.password) {
        console.log(login_data.password, result.password);

        dispatch({ type: "user/error", payload: "the passwords is incorrect" });
        return;
      }
      //  finally saving the data
      else dispatch({ type: "current_user/loaded", payload: result });
    } catch {
      dispatch({
        type: "user/error",
        payload: "error in loading the data, please try again later",
      });
    }
  }

  return (
    <login_Context.Provider
      value={{ error, isLoading, data, createUser, current_user, getCurrUser }}
    >
      {children}
    </login_Context.Provider>
  );
}

function useLogin() {
  const context = useContext(login_Context);
  if (!context) {
    throw new Error("login context is used outside the Login Provider");
  }
  return context;
}

export { LoginContext, useLogin };
