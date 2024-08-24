import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaMailBulk, FaMailchimp } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { FaCode } from "react-icons/fa6";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-main-component">
        <h1>Hi, I'm Siddharth</h1>
        <p className="home-about-section">
          I’m currently working at Deloitte as a Business Technology Solution
          Analyst. I have a passion for contributing to diverse projects and
          collaborating with teams. My skills include C++, ReactJS, ExpressJS,
          NodeJS, SQL, MongoDB,CSS. I also have good knowledge of core concepts
          such as DBMS and Operating System. I thrive on solving complex
          challenges and delivering impactful solutions, while continuously
          growing in the tech field.
        </p>
        <hr />
        <div className="home-buttons">
          <button>
            <Link to="/">
              About <GoArrowRight />
            </Link>
          </button>
          <button>
            <Link to="/">
              Projects Made <GoArrowRight />
            </Link>
          </button>
          <button>
            <Link to="/">
              Skills <GoArrowRight />
            </Link>
          </button>
          <button>
            <Link to="/experience">
              Experience <GoArrowRight />
            </Link>
          </button>
          <button>
            <Link to="/">
              Resume <GoArrowRight />
            </Link>
          </button>
          <button>
            <Link to="/">
              Contact <GoArrowRight />
            </Link>
          </button>
        </div>
      </div>

      <div className="home-socialIcons">
        <a
          href="https://github.com/code-gen21"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icons-size" size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/siddharth-kandwal-4759a0205/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icons-size" size={30} />
        </a>
        <a
          href="mailto: siddharth.kandwal05@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMailBulk className="icons-size" size={30} />
        </a>
        <a
          href="https://leetcode.com/u/Siddharth_kandwal2001/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaCode className="icons-size" size={30} />
        </a>
      </div>
    </div>
  );
};

export default HomePage;
