import React from "react";
import "./About.css";
import about from "../../img/about-img.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

import cv from "../../pdf/RaghavendarRavi-Resume.pdf";

const About = () => {
  return (
    <div className="about-subsection">
      {/* <div className="base">
        <div className="holder"></div>
        <div className="thread">
          <div className="knob"></div>
          <img src={about} alt="about-image" id="pendulum-img" tabIndex="1" />
        </div>
      </div> */}

      {/* <div className="about-text">
        <p>
          I am a <span>Developer</span>, currently working as a Software
          Developer Intern. I enjoy building everythig from Small Bussiness Stes
          to Rich Interactive Web Applications. If you're a Bussiness Seeking
          for a Freelancer or an Employer looking to Hire, you can get in touch
          with me.
          <br /> Thank you.
        </p>
      </div> */}

      <div id="about-img">
        {/* <h1>ABOUT!</h1> */}
        <img src={about} alt="ABOUT" />
      </div>

      <div id="about-text">
        <p>
          I am a <span>Developer</span>, currently working as a Software
          Developer Intern. I enjoy building everythig from Small Bussiness Stes
          to Rich Interactive Web Applications. If you're a Bussiness Seeking
          for a Freelancer or an Employer looking to Hire, you can get in touch
          with me.
          <br /> Thank you.
        </p>
      </div>
      <div className="email">
        <div className="footer-link">
          <a href="#footer">Get in Touch</a>
        </div>
        <div className="resume">
          <a href={cv} target="_blank">
            Resume <FontAwesomeIcon icon={faFilePdf} />
          </a>
        </div>
        {/* <p>
          e-mail:
          <a href="mailto:ragavravi25@gmail.com">ragavravi25@gmail.com</a>
        </p> */}
      </div>
    </div>
  );
};

export default About;
