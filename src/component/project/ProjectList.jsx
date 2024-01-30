import React from "react";
import ProjectItem from "./ProjectItem";
import { useProject } from "../../contexts/ProjectContext";

export default function ProjectList() {
  const { project_loading, error, projects } = useProject();

  if (project_loading) return <div>Loading the page</div>;
  if (error || !projects) return <div>It's not you but us</div>;
  return (
    <ul>
      {projects.map((project) => (
        <ProjectItem project={project} key={project.id} id={project.id} />
      ))}
    </ul>
  );
}
