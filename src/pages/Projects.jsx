import React from "react";
import ProjectList from "../component/project/ProjectList";
import Sidebar from "../component/project/Sidebar";
import styles from "./Projects.module.css";
import Navbar from "../component/Homepage/Navbar";
export default function Projects(projects) {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.project}>
        <ProjectList />
      </div>
    </div>
  );
}
