import React, { createContext, useContext, useEffect, useReducer } from "react";

const project_Context = createContext();
const base_url = "http://localhost:1002";
const projectInitialState = {
  project_loading: false,
  error: "",
  projects: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "project/loaded":
      return {
        ...state,
        projects: action.payload,
        project_loading: false,
        error: "",
      };
    case "project/error":
      return {
        ...state,
        error: action.payload,
        project_loading: false,
        projects: [],
      };
    case "project/project_loading":
      return {
        ...state,
        project_loading: true,
      };
    default:
      return state;
  }
}
function ProjectContext({ children }) {
  const [{ projects, error, project_loading }, dispatch] = useReducer(
    reducer,
    projectInitialState
  );
  useEffect(() => {
    async function ProjectList() {
      try {
        dispatch({ type: "project/project_loading" });
        const res = await fetch(`${base_url}/project`);
        const result = await res.json();
        console.log(result);
        dispatch({ type: "project/loaded", payload: result });
      } catch {
        dispatch({
          type: "project/error",
          payload: "error while project_loading the list",
        });
      }
    }
    ProjectList();
  }, []);
  console.log("List of projects");
  console.log(projects);
  return (
    <project_Context.Provider value={{ error, project_loading, projects }}>
      {children}
    </project_Context.Provider>
  );
}

function useProject() {
  const context = useContext(project_Context);
  if (!context) {
    throw new Error("project context is used outside the useProjext provider");
  }
  return context;
}
export { useProject, ProjectContext };
