import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="navbar-name">Shobhit Jain</h1>
      </div>
      <div className="navbar-right">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/education" className="nav-link">
          Education
        </Link>
        <Link to="/experiences" className="nav-link">
          Experiences
        </Link>
        <Link to="/projects" className="nav-link">
          Projects
        </Link>
        <Link to="/skills" className="nav-link">
          Skills
        </Link>
        <Link to="/resume" className="nav-link">
          Resume
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
