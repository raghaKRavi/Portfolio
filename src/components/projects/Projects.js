import React from "react";

import "./ProjectsStyle.css";
import ProjectImg from "./imgs/computer.jpg";

const Projects = () => {
  return (
    <div className="project-body">
      <div className="card">
        <div className="project-poster">
          <img src={ProjectImg} />
        </div>

        <div className="details">
          <h2>Object Search Application with Transfer Learning</h2>

          <div class="info">
            <p>Project Description</p>
            <h5>
              The number of lines in a paragraph depends on the size of the
              browser window. If you resize the browser window, the number of
              lines in this paragraph will change.
            </h5>
          </div>

          <div className="link">
            <i class="fa fa-code"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
