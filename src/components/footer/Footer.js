import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-body">
      <div className="footer-subsection">
        <p>
          e-mail:
          <a href="mailto:ragavravi25@gmail.com">ragavravi25@gmail.com</a>
        </p>
        <ul>
          <li>
            <a
              href="https://github.com/Ragav25"
              target="_blank"
              id="github-link"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/raghavendar-ravi-48ab75137/"
              target="_blank"
              id="linkedin-link"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
