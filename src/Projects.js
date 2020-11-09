import React from "react";
import { ToDoList, QuizAppProject, PurringTails } from "./projects-helpers";
import Card from "./Card";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects-overview">
      <h2>Projects</h2>
      <div className="projects-list">
        <Card project={ToDoList} />
        <Card project={QuizAppProject} />
        <Card project={PurringTails} />
      </div>
    </section>
  );
}

export default Projects;
