import React, { createContext, useContext, useEffect, useReducer } from "react";
const devContext = createContext();
const developerInitialContext = {
  deveLoading: false,
  currDeveloper: null,
  deveError: "",
};

const base_url = "http://localhost:1002";
function reducer(state, action) {
  switch (action.type) {
    case "developer/loading": {
      return {
        ...state,
        deveLoading: true,
      };
    }
    case "developer/loaded": {
      return {
        ...state,
        deveLoading: false,
        currDeveloper: action.payload,
      };
    }
    case "developer/error": {
      return {
        ...state,
        deveLoading: false,
        deveError: action.payload,
      };
    }
    default:
      return state;
  }
}
function DeveloperContext({ children }) {
  const [{ deveError, deveLoading, currDeveloper }, dispatch] = useReducer(
    developerInitialContext,
    reducer
  );

  async function getDeveloper(id) {
    try {
      dispatch({ type: "developer/loading" });
      const res = await fetch(`${base_url}/users/id`);
      const result = await res.json();
    } catch {
      dispatch({
        type: "developer/error",
        payload: "There is some issue in getting user Details ",
      });
    }
  }

  return (
    <devContext.Provider
      value={{ deveError, deveLoading, currDeveloper, getDeveloper }}
    >
      {children}
    </devContext.Provider>
  );
}

function useDeveloper() {
  const context = useContext(devContext);
  if (!context) {
    throw new Error("Developer Context is used outside the context container");
  }
  return context;
}

export { useDeveloper, DeveloperContext };
