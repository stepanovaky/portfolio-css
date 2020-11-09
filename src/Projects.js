import React from "react";
import { ToDoList, QuizAppProject, PurringTails } from "./projects-helpers";
import Card from "./Card";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects-overview">
      <h2>Projects</h2>
      <div className="projects-list">
        <Card
          img={ToDoList.img}
          title={ToDoList.title}
          livelink={ToDoList.livelink}
          p1={ToDoList.p1}
          p2={ToDoList.p2}
          p3={ToDoList.p3}
          p4={ToDoList.p4}
        />
        <Card
          img={QuizAppProject.img}
          title={QuizAppProject.title}
          livelink={QuizAppProject.livelink}
          p1={QuizAppProject.p1}
          p2={QuizAppProject.p2}
          p3={QuizAppProject.p3}
          p4={QuizAppProject.p4}
        />
        <Card
          img={PurringTails.img}
          title={PurringTails.title}
          livelink={PurringTails.livelink}
          p1={PurringTails.p1}
          p2={PurringTails.p2}
          p3={PurringTails.p3}
          p4={PurringTails.p4}
        />
      </div>
    </section>
  );
}

export default Projects;
