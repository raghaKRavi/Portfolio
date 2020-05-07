import React from "react";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <div className="card">
        <div className="additional">
          <div className="user-card">
            {/* img tag */}

            <img src={props.projectImg} />
          </div>
          <div className="more-info">
            <h1> {props.projectTitle}</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
              volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut
              pulvinar.
            </p>
            <div className="stats">
              <div id="github-icon">
                <i class="fa fa-github-square"></i>
                <div className="icon-title">Github</div>
              </div>
              <div id="demo-icon">
                <i class="fa fa-desktop"></i>
                <div className="icon-title">Live Demo</div>
              </div>
            </div>
          </div>
        </div>
        <div className="general">
          <h1>{props.projectTitle}</h1>
          <span className="more">Hover for more info</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
