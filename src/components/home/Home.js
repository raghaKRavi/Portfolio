import React from "react";

import "./HomeStyle.css";
import logo from "./KRRLogo.svg";
import TypeWriter from "../typewrite/Typewrite";
import TypewriteAnimation from "../../typewriteAnimation/TypewriteAnimation";

let msgs = ["SOFTWARE DEVELOPER", "FREELANCER", "A CODING GEEK!!"];

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
      <section>
        <h2>hello </h2>
      </section>
    </div>
  );
};

export default Home;
