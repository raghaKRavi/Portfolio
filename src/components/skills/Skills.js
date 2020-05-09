import React, { useState } from "react";

import "./Skills.css";

const Skills = () => {
  const [isShowFilter, setIsShowFilter] = useState(false);

  const toggleHandler = () => setIsShowFilter((value) => !value);

  return (
    <div className="skills">
      <hr></hr>
      <div className="skills-tree">
        <ul>
          <li>
            <button
              onClick={toggleHandler}
              className="skills-button"
              id={isShowFilter ? "isSkills-active" : "isSkills-deactive"}
            >
              SKILLS
            </button>
            <div
              className="branches"
              id={isShowFilter ? "isFilter-true-branch" : "isFilter-branch"}
            >
              <div className="checking"></div>
              <div className="middle-branch"></div>
              <div className="middle-branch2"></div>
              {/* <!--    left branches      --> */}
              <div className="left-zero-branch"></div>
              <div className="zero-connect-branch"></div>
              <div className="left-first-branch"></div>
              <div className="first-connect-branch"></div>
              {/* <!--   right branches     --> */}
              <div className="right-zero-branch"></div>
              <div className="firstRight-connect-branch"></div>
              <div className="right-first-branch"></div>
              <div className="zeroRight-connect-branch"></div>
            </div>

            {/* filter buttons */}
            <ul
              className="filter-ul"
              id={isShowFilter ? "isFilter-true-buttons" : "isFilter-buttons"}
            >
              <li>
                <button className=" filter-button " id="frontend-button">
                  frontend
                </button>
              </li>
              <li>
                <button className="filter-button" id="backend-button">
                  backend
                </button>
              </li>
              <li>
                <button className="filter-button" id="framework-button">
                  framework
                </button>
              </li>
              <li>
                <button className="filter-button" id="data-button">
                  data
                </button>
              </li>
              <li>
                <button className="filter-button" id="others-button">
                  others
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
