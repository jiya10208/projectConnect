import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectItem.module.css";
import { useLogin } from "../../contexts/LoginContext";

// const BASE_URL = "http://localhost:8000";

export default function ProjectItem({ project }) {
  const { current_user } = useLogin();
  var path = "/login";
  if (!current_user) {
    path = "/projects";
  }
  return (
    <Link to={path} className={styles.link}>
      <li className={styles.projectItem}>
        <div className={styles.About}>
          <div>
            <img src={project.image} alt={project.name} />
          </div>
          <div>
            <p className={styles.owner}> {project.owner}</p>
            <h3>{project.techStack}</h3>
          </div>
        </div>
        <div>
          <p>
            Project Name: <em>{project.name} </em>
            Projects
          </p>
          <p>
            Status: <span>{project.status} </span>
          </p>
        </div>
      </li>
    </Link>
  );
}
