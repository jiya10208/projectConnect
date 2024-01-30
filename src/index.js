import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { LoginContext } from "./contexts/LoginContext";
import { ProjectContext } from "./contexts/ProjectContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoginContext>
      <ProjectContext>
        <App />
      </ProjectContext>
    </LoginContext>
  </React.StrictMode>
);
