import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./Main";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import "./App.css";

function App() {
  // let width = window.innerWidth;

  const [width, setWidth] = useState(window.innerWidth);

  // setWidth(window.innerWidth);

  const reportWindowSize = () => {
    setWidth(window.innerWidth);

    // forceUpdate();
  };

  window.onresize = reportWindowSize;

  useEffect(() => {}, [width]);

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Switch>
          <Redirect exact from="/" to="/#home" />
        </Switch>
      </div>
      <div class="container">
        <Main />
        <Projects />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
