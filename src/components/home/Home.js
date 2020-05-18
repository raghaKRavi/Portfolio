import React, { useState, useEffect } from "react";

import "./HomeStyle.css";

import logo from "./KRRLogo.svg";
import TypeWriter from "../typewrite/Typewrite";

import ProjectCard from "../projectcard/ProjectCard";
// import Skills from "../skills/Skills";
// import IconSkills from "../IconSkills/IconSkills";
import Contact from "../contact/Contact";
import About from "../about/About";
import InfographicSkills from "../inforgraphicSkills/InforgraphicSkills";

const msgs = ["SOFTWARE DEVELOPER", "FREELANCER", "A CODING GEEK!!"];

const Home = () => {
  const [scrolling, setScrolling] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 600) {
        setScrolling(true);
      } else {
        setScrolling(false);
        setShowTooltip(false);
      }

      if (window.pageYOffset > 2930) {
        setShowTooltip(true);
      } else if (window.pageYOffset > 3380) {
        setShowTooltip(false);
      } else {
        setShowTooltip(false);
      }
    };
  }, []);

  return (
    <div className="body">
      <header id={scrolling ? "scrolling" : "not-scrolling"}>
        <div className="logo-container">
          <img src={logo} alt="logo" id="#logo" />
        </div>
        <nav id="">
          <ul className="nav-links">
            <li>
              <a className="nav-link" href="#about">
                ABOUT
              </a>
            </li>
            <li>
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="nav-link" href="#contact">
                Say Hello!!
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="home-section">
        <div className="left-box">
          <h1>Raghavendar</h1>

          <div className="link-left">
            <a
              className="social-link"
              href="https://github.com/Ragav25"
              target="_blank"
            >
              <i
                className="fa fa-github-square"
                id="github-icon"
                title="GITHUB"
              >
                {/* <p>GITHUB</p> */}
              </i>
            </a>
          </div>
        </div>

        <div className="right-box">
          <h1>Ravi</h1>
          <TypeWriter messages={msgs} />
          <div className="link-right">
            <a
              className="social-link"
              href="https://www.linkedin.com/in/raghavendar-ravi-48ab75137/"
              target="_blank"
            >
              <i
                className="fa fa-linkedin-square"
                id="linkedin-icon"
                title="LinkedIn"
              >
                {/* <p>LINKEDIN</p> */}
              </i>
            </a>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <About />
      </section>

      <hr></hr>

      <section className="project-section" id="projects">
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

      <hr></hr>

      <section className="skills-section" id="skills">
        {/* <Skills showTooltip={showTooltip} />
        <IconSkills id="icon-skills" /> */}

        <InfographicSkills />
      </section>

      <hr></hr>
      <section className="contact-section" id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
