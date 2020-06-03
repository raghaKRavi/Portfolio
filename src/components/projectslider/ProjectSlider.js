import React, { useEffect } from "react";
import "./ProjectSlider.css";
import Swiper from "swiper";
import "swiper/css/swiper.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const ProjectSlider = (props) => {
  useEffect(() => {
    new Swiper(".blog-slider", {
      spaceBetween: 30,
      effect: "fade",
      loop: true,
      mousewheel: {
        invert: false,
      },
      pagination: {
        el: ".blog-slider__pagination",
        clickable: true,
      },
    });
  }, []);

  return (
    <>
      <div className="blog-slider">
        <div className="blog-slider__wrp swiper-wrapper">
          <div className="blog-slider__item swiper-slide">
            <div className="blog-slider__img">
              <img src={props.projectImg} alt="project img" />
            </div>
            <div className="blog-slider__content">
              <span className="slider__tags">
                <ul>
                  {props.projectTags &&
                    props.projectTags.map(function (tag) {
                      return <li>{tag}</li>;
                    })}
                </ul>
              </span>
              <div className="slider__title">{props.projectname}</div>
              <div className="slider--icons">
                <ul>
                  <li>
                    <a
                      href={props.projectGithubLink}
                      id="github--icon"
                      target="_blank"
                      style={{ cursor: props.githubCursor }}
                    >
                      <FontAwesomeIcon icon={faGithubSquare} />
                      <p>github</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href={props.projectDemoLink}
                      id="demo--icon"
                      target="_blank"
                      style={{ cursor: props.demoCursor }}
                    >
                      <FontAwesomeIcon icon={faEye} />
                      <p>demo</p>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="note--text" id="scroll">
                scroll on the project to view description
              </div>
              <div className="note--text" id="swipe">
                swipe on the project to view description
              </div>
            </div>
          </div>

          <div className="blog-slider__item swiper-slide">
            <div className="blog-slider__img">
              <img src={props.projectImg} alt="project img" />
            </div>
            <div className="blog-slider__content">
              <div className="slider__description">
                {props.projectdescription}
              </div>
              <div className="slider--icons">
                <ul>
                  <li>
                    <a
                      href={props.projectGithubLink}
                      id="github--icon"
                      target="_blank"
                      style={{ cursor: props.githubCursor }}
                    >
                      <FontAwesomeIcon icon={faGithubSquare} />
                      <p>github</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href={props.projectDemoLink}
                      id="demo--icon"
                      target="_blank"
                      style={{ cursor: props.demoCursor }}
                    >
                      <FontAwesomeIcon icon={faEye} />
                      <p>demo</p>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="note--text" id="scroll">
                scroll on the project to view title
              </div>
              <div className="note--text" id="swipe">
                swipe on the project to view description
              </div>
            </div>
          </div>
        </div>
        <div className="blog-slider__pagination"></div>
      </div>
    </>
  );
};

export default ProjectSlider;
