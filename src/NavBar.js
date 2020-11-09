import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="menu">
      <nav className="large">
        <a className="home" href="#home">
          <AiOutlineHome />
        </a>
        <a href="#projects">
          <BsBriefcase />
        </a>
        <a href="#aboutme">
          <CgProfile />
        </a>
      </nav>
    </div>
  );
}

export default NavBar;
