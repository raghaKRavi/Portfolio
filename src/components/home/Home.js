import React, { useState, useEffect } from "react";

import "./HomeStyle.css";

import Contact from "../contact/Contact";
import ContactSection from "../contact/ContactSection";
import About from "../about/About";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faLaptopCode,
  faBrain,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ProjectSlider from "../projectslider/ProjectSlider";
import SkillSection from "../skills/SkillSection";
import Footer from "../footer/Footer";

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

  const msgs = ["SOFTWARE DEVELOPER", "FREELANCER", "A CODING GEEK!!"];

  return (
    <div className="home-body">
      <nav className="sidenav" id={scrolling ? "scrolling" : "not--scrolling"}>
        <ul className="nav-icons">
          <li id="nav-icon">
            <a href="#about">
              <FontAwesomeIcon icon={faAddressCard} />
              <p>About</p>
            </a>
          </li>
          <li id="nav-icon">
            <a href="#project-container">
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

      <section id="project-container">
        <div className="project-sidebar">
          <p>projects</p>
        </div>

        <div className="project-zero">
          <ProjectSlider
            projectname={"object search application with transfer learning"}
            projectdescription={
              "The application will scan the object through camera and helps to find the near-by stores to buy the product. It is created using Python and Android Studio with the help of Tensorflow library."
            }
          />
        </div>
        <hr></hr>
        <div className="project-zero">
          <ProjectSlider projectname={"twitter clone in google app engine"} />
        </div>
        <hr></hr>
        <div className="project-zero">
          <ProjectSlider
            projectname={"credit card fraud detection in data mining"}
          />
        </div>
        <hr></hr>
        <div className="project-zero">
          <ProjectSlider
            projectname={"anagram search engine in google app engine"}
          />
        </div>
        <hr></hr>
        <div className="project-zero">
          <ProjectSlider
            projectname={"bee-hive(A to-do application) in React "}
          />
        </div>
      </section>

      <hr></hr>

      <section className="skills-section" id="skills">
        <SkillSection />
      </section>

      <hr></hr>
      <section className="contact-section" id="contact">
        {/* <Contact /> */}
        <ContactSection />
      </section>
      <section className="footer-section" id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
