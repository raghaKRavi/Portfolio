import React from "react";

import "./HomeStyle.css";
import logo from "./KRRLogo.svg";
import TypeWriter from "../typewrite/Typewrite";
import TypewriteAnimation from "../../typewriteAnimation/TypewriteAnimation";
import Projects from "../projects/Projects";

let msgs = ["SOFTWARE DEVELOPER", "FREELANCER", "A CODING GEEK!!"];

const Home = () => {
  return (
    <div className="body">
      <header>
        <div className="logo-container">
          <img src={logo} alt="logo" id="#logo" />
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Skills
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Education
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Extra
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="home-section">
        <div className="left-box">
          <h1>Raghavendar</h1>
        </div>
        <div className="right-box">
          <h1>Ravi</h1>
          <TypeWriter messages={msgs} />
          <TypewriteAnimation />
        </div>
      </section>

      <section className="project-section">
        <div className="sidenav-project">
          <p className="vertical-text">Projects</p>
        </div>

        <div className="project-heading">
          <h1 className="heading">Projects</h1>
        </div>

        <div className="project-01">
          <Projects />
        </div>
        <div className="project-02">
          <Projects />
        </div>
        <div className="project-03">
          <Projects />
        </div>
        <div className="project-04">
          <Projects />
        </div>
      </section>

      {/* <section className="project-section">
        <div className="project-sidenav">
          <h1 className="vertical-text">PROJECTS</h1>
        </div>

        <main className="projects-area">
          <div className="project-1">
            <Projects />
          </div>
          <div className="project-2">
            <Projects />
          </div>
          <div className="project-3">
            <Projects />
          </div>
          <div className="project-4">
            <Projects />
          </div>
        </main>
      </section> */}
      <section className="skills-section"></section>
    </div>
  );
};

export default Home;
