import React from "react";

import "./HomeStyle.css";
import logo from "./KRRLogo.svg";
import Icons from "../icons/Icons";

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

      <main className="home-main">
        <div className="name-box">
          <h1>
            Raghavendar <br></br>
            <span>Ravi</span>
          </h1>
          <div className="social-icons">
            <Icons name={"fa fa-github-square github"} content="GITHUB" />
            <Icons name={"fa fa-linkedin-square linkedin"} content="LINKEDIN" />
          </div>
        </div>
        <div className="avatar-box">
          <h1>Avatar</h1>
        </div>
        <div className="description-box">
          <h1>Description About ME</h1>
        </div>
      </main>
      <section>
        <h2>hello </h2>
      </section>
    </div>
  );
};

export default Home;
