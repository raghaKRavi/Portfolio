import React, { useState, useEffect } from "react";

import "./HomeStyle.css";

import TypeWriter from "../typewrite/Typewrite";

import ProjectCard from "../projectcard/ProjectCard";
// import Skills from "../skills/Skills";
// import IconSkills from "../IconSkills/IconSkills";
import Contact from "../contact/Contact";
import About from "../about/About";
import InfographicSkills from "../inforgraphicSkills/InforgraphicSkills";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faLaptopCode,
  faBrain,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// const msgs = ["SOFTWARE DEVELOPER", "FREELANCER", "A CODING GEEK!!"];

const Home = () => {
  const [scrolling, setScrolling] = useState(false);
  const [showBurger, setShowBurger] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
  }, []);

  console.log(showBurger);

  return (
    <div className="home-body">
      {/* <header id={scrolling ? "sticky" : " "}>
        <a href="#" className="logo">
          Logo
        </a>
        <ul className="nav-links" id={showBurger ? "nav-active" : ""}>
          <li>
            <a href="#about">
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div
          className="burger"
          onClick={() => setShowBurger((value) => !value)}
          id={showBurger ? "close-toggle" : ""}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </header> */}

      <nav id="sidenav">
        <ul className="nav-icons">
          <li id="nav-icon">
            <a href="#about">
              <FontAwesomeIcon icon={faAddressCard} />
              <p>About</p>
            </a>
          </li>
          <li id="nav-icon">
            <a href="#projects">
              <FontAwesomeIcon icon={faLaptopCode} />
              <p>Projects</p>
            </a>
          </li>
          <li id="nav-icon">
            <a href="#skills">
              <FontAwesomeIcon icon={faBrain} />
              <p>Skills</p>
            </a>
          </li>
          <li id="nav-icon">
            <a href="#contact">
              <FontAwesomeIcon icon={faPaperPlane} />
              <p>Contact</p>
            </a>
          </li>
        </ul>
      </nav>

      {/* home-page */}

      <section className="home-page">
        <h1>RAGHAVENDAR</h1>
        <h2>
          <span>RAVI</span>
        </h2>
        {/* <div id="social-button"></div> */}
        <div id="social-sidebar">
          <ul>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faGithubSquare} />
                <p>github</p>
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} />
                <p>LinkedIn</p>
              </a>
            </li>
          </ul>
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
