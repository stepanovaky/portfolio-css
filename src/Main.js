import React, { useState, useEffect } from "react";
import Card from "./Card";
import { PurringTails } from "./projects-helpers";
import "./Main.css";

function Main() {
  return (
    <section id="home" className="main">
      <h2>Featured Project</h2>
      <div className="card">
        <Card
          img={PurringTails.img}
          title={PurringTails.title}
          livelink={PurringTails.livelink}
          p1={PurringTails.p1}
          p2={PurringTails.p2}
          p3={PurringTails.p3}
          p4={PurringTails.p4}
        />{" "}
      </div>
    </section>
  );
}

export default Main;
