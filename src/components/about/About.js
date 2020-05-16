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
          <img src={about} alt="about-image" id="pendulum-img" tabindex="1" />
        </div>

        {/* <div className="image-hang-line" id="left-hanging"></div> */}
      </div>

      <div className="about-text">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        {/* <i class="fa fa-scissors" aria-hidden="true"></i> */}

        {/* <img src="https://i.ya-webdesign.com/images/scissors-clipart-svg-9.png" /> */}
      </div>
    </div>
  );
};

export default About;
