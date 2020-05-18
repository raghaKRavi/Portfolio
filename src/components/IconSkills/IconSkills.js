import React from "react";
import "./IconSkills.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJava, faPython } from "@fortawesome/free-brands-svg-icons";

const IconSkills = () => {
  return (
    <div className="icon-body">
      <div id="icon-skills">
        <div id="java-icon">
          <FontAwesomeIcon icon={faJava} />
          <p>Java</p>
        </div>
        <FontAwesomeIcon icon={faJava} />
        <FontAwesomeIcon icon={faJava} />
        <FontAwesomeIcon icon={faJava} />
        <FontAwesomeIcon icon={faJava} />
        <FontAwesomeIcon icon={faJava} />
        <FontAwesomeIcon icon={faPython} />
        <FontAwesomeIcon icon={faPython} />
        <FontAwesomeIcon icon={faPython} />
        <FontAwesomeIcon icon={faPython} />
        <FontAwesomeIcon icon={faPython} />
        <FontAwesomeIcon icon={faPython} />
        <FontAwesomeIcon icon={faPython} />
        {/* java svg */}

        {/* python */}
      </div>
    </div>
  );
};

export default IconSkills;
