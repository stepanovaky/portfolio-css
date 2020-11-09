import React from "react";
import "./Card.css";
import { SiGithub } from "react-icons/si";

// src\projects-helpers.js
function Card(props) {
  return (
    <div class="cards-container">
      <div class="card-container">
        <div class="card">
          <div class="front">
            <img src={props.img} />
          </div>
          <div class="back">
            <a href={props.livelink} target="_blank">
              <h3 className="card-title">{props.title}</h3>
            </a>
            <p>{props.p1}</p>
            <p>{props.p2}</p>
            <p>{props.p3}</p>
            <p>{props.p4}</p>
            <a href={props.githublink} target="_blank">
              <p>
                <SiGithub />
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
