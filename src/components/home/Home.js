import React from "react";

import "./HomeStyle.css";
import logo from "./KRRLogo.svg";
import TypeWriter from "../typewrite/Typewrite";
import TypewriteAnimation from "../../typewriteAnimation/TypewriteAnimation";
// import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import ProjectCard from "../projectcard/ProjectCard";

const msgs = ["SOFTWARE DEVELOPER", "FREELANCER", "A CODING GEEK!!"];

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
          <ProjectCard
            projectImg={
              "https://worldschoolphotographs.com/wp-content/uploads/2018/05/loading.gif"
            }
            projectTitle={"Object Search Application with transfer learning"}
          />
        </div>
        <div className="project-02">
          <ProjectCard
            projectImg={
              "https://images.squarespace-cdn.com/content/v1/5c8f97ea77b9034020248bdc/1583250937487-XUA97M0CXER3EC2IO7EX/ke17ZwdGBToddI8pDm48kFQQgP34qnCpeHaeAOzTt7pZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIvwpK0aFuhG0GtLLHqvbV4raqY38tdDiF-KTEvoUH9G4/Twitter.gif"
            }
            projectTitle={"Twitter Clone on google app engine"}
          />
        </div>
        <div className="project-03">
          <ProjectCard
            projectImg={
              "https://cdn.dribbble.com/users/3187414/screenshots/6063216/ezgif.com-crop_2_.gif"
            }
            projectTitle={"Anagram Search Engine"}
          />
        </div>
        <div className="project-04">
          <ProjectCard
            projectImg={
              "https://gifimage.net/wp-content/uploads/2017/10/credit-card-gif-3.gif"
            }
            projectTitle={"cerdit card fraud detection"}
          />
        </div>
      </section>

      <section className="skills-section">
        <Skills />
      </section>
    </div>
  );
};

export default Home;
