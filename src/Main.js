import React, { useState, useEffect } from "react";
import Card from "./Card";
import { PurringTails } from "./projects-helpers";
import "./Main.css";

function Main() {
  return (
    <section id="home" className="main">
      <h2>Featured Project</h2>
      <div className="card">
        <Card project={PurringTails} />{" "}
      </div>
    </section>
  );
}

export default Main;
