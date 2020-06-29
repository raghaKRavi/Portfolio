import React, { useState, useEffect } from "react";

import "./HomeStyle.css";
// import Contact from "../contact/Contact";
import ContactSection from "../contact/ContactSection";
import About from "../about/About";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faLaptopCode,
  faBrain,
  faPaperPlane,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";

import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ProjectSlider from "../projectslider/ProjectSlider";
import SkillSection from "../skills/SkillSection";
import Footer from "../footer/Footer";

import TypeWriter from "../typewrite/Typewrite";

const Home = () => {
  const [scrolling, setScrolling] = useState(false);
  const [showBurger, setShowBurger] = useState(false);

  const msgs = ["DEVELOPER", "FREELANCER", "A CODING GEEK!!"];

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
  }, []);

  const burgerHandler = () => {
    setShowBurger((value) => !value);
  };

  return (
    <div className="home-body">
      {/*  */}
      <div className="burger" onClick={burgerHandler}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      {/*  */}

      {/* nav bar */}
      <nav
        className={showBurger ? "sidenav onsidenav" : "sidenav offsidenav"}
        id={scrolling ? "scrolling" : "not--scrolling"}
      >
        <div className="close-button">
          <FontAwesomeIcon icon={faWindowClose} onClick={burgerHandler} />
        </div>
        <ul className="nav-icons">
          <li id="nav-icon">
            <a href="#about" onClick={burgerHandler}>
              <FontAwesomeIcon icon={faAddressCard} />
              <p>About</p>
            </a>
          </li>
          <li id="nav-icon">
            <a href="#project-container" onClick={burgerHandler}>
              <FontAwesomeIcon icon={faLaptopCode} />
              <p>Projects</p>
            </a>
          </li>
          <li id="nav-icon">
            <a href="#skills" onClick={burgerHandler}>
              <FontAwesomeIcon icon={faBrain} />
              <p>Skills</p>
            </a>
          </li>
          <li id="nav-icon">
            <a href="#contact" onClick={burgerHandler}>
              <FontAwesomeIcon icon={faPaperPlane} />
              <p>Contact</p>
            </a>
          </li>
        </ul>
      </nav>

      {/* home-page */}

      <section className="home-page">
        <h1>RAGHAVENDAR</h1>
        <h2>RAVI</h2>

        <span>
          <TypeWriter messages={msgs} />
        </span>

        <a href="https://github.com/Ragav25" id="responsive-github">
          <FontAwesomeIcon icon={faGithubSquare} />
        </a>

        <a
          href="https://www.linkedin.com/in/raghavendar-ravi-48ab75137/"
          id="responsive-linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        {/* <div id="social-button"></div> */}
        <div id="social-sidebar">
          <ul>
            <li>
              <a href="https://github.com/Ragav25" id="github-link">
                <FontAwesomeIcon icon={faGithubSquare} />
                <p>github</p>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/raghavendar-ravi-48ab75137/"
                id="linkedin-link"
              >
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
            projectTags={[
              "Python",
              "Tensorflow",
              "Mobilenet",
              "Android (Java)",
            ]}
            projectImg={
              "https://thumbs.gfycat.com/MistyBleakDrongo-size_restricted.gif"
            }
            githubCursor={"not-allowed"}
            demoCursor={"not-allowed"}
          />
        </div>
        <hr></hr>
        <div className="project-zero">
          <ProjectSlider
            projectTags={[
              "Python",
              "Jinja2",
              "Html",
              "css",
              "Google app engine",
            ]}
            projectImg={
              "https://www.socialchamp.io/blog/wp-content/uploads/2019/06/twittercelebration.gif"
            }
            projectname={"twitter clone in google app engine"}
            projectdescription={
              "A Basic implementation of Twitter where a user can follow user and can post delete view tweets, created in Google App Engine using Python, Jinja 2, Html and css"
            }
            projectGithubLink={
              "https://github.com/Ragav25/Twitter-Clone-Google-App-Engine"
            }
            demoCursor={"not-allowed"}
          />
        </div>
        <hr></hr>
        <div className="project-zero">
          <ProjectSlider
            projectTags={["R-Language", "Weka", "Data Mining"]}
            projectImg={
              "https://i.pinimg.com/originals/d9/52/be/d952bea71eedeba1345b0b18e0233f4a.gif"
            }
            projectname={"credit card fraud detection in data mining"}
            projectdescription={
              "Detection of Fraudulence in Banking Sector using Data Mining techniques of Cluster (K-Means), Classification process (J48, Random Forest) and Class Balancer Technique on “Credit Card Fraud Dataset” in Weka and R-Language."
            }
            githubCursor={"not-allowed"}
            demoCursor={"not-allowed"}
          />
        </div>
        <hr></hr>
        <div className="project-zero">
          <ProjectSlider
            projectTags={[
              "Python",
              "Jinja 2",
              "html",
              "css",
              "Google app engine",
            ]}
            projectImg={
              "https://media0.giphy.com/media/MgOe9TFUhkX3G/source.gif"
            }
            projectname={"anagram search engine in google app engine"}
            projectdescription={
              "With the help of Python, Jinja2 Template, Html and Css - developed a search engine in Google App Engine(Paas Cloud Platform) which will gives the anagram for input word, Also user can add their own set of anagrams"
            }
            projectGithubLink={
              "https://github.com/Ragav25/anagaram-google-app-engine"
            }
            demoCursor={"not-allowed"}
          />
        </div>
        <hr></hr>
        <div className="project-zero">
          <ProjectSlider
            projectTags={["React Hooks", "Context-API", , "HTML", "CSS"]}
            projectImg={
              "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ea5d0476339699.5c6694d453222.gif"
            }
            projectname={"bee-hive (A to-do application) in React "}
            projectdescription={
              "Bee-hive is an application where users can add, delete, and update their projects and tasks for each project individually. The Added Data will be stored to local Storage and can view it unless the page is hard refreshed or the data is deleted."
            }
            projectGithubLink={"https://github.com/Ragav25/To-Do_Application"}
            demoCursor={"not-allowed"}
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
