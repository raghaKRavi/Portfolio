import React from "react";
import "./About.css";
import about from "../../img/anew.png";

const About = () => {
  return (
    <div className="about-subsection">
      <div className="base">
        <div className="holder"></div>
        <div className="thread">
          <div className="knob"></div>
          <img src={about} alt="about-image" id="pendulum-img" tabIndex="1" />
        </div>

        {/* <div className="image-hang-line" id="left-hanging"></div> */}
      </div>

      <div className="about-text">
        <p>
          I am a <span>Developer</span>, currently working as a Software
          Developer Intern. I enjoy building everythig from Small Bussiness Stes
          to Rich Interactive Web Applications. If you're a Bussiness Seeking
          for a Freelancer or an Employer looking to Hire, you can get in touch
          with me.
          <br /> Thank you.
        </p>
      </div>
    </div>
  );
};

export default About;
