import React, { useState } from "react";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import "./Skills.css";

const Skills = (props) => {
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [hoverFilterButton, setHoverFilterButton] = useState({
    frontend: false,
    backend: false,
    framework: false,
    data: false,
    others: false,
  });

  const toggleHandler = () => setIsShowFilter((value) => !value);

  const tooltip = (
    <Tooltip className={props.showTooltip ? "out" : "in"} id="tooltip-right">
      CLICK FOR FILTER OPTIONS
    </Tooltip>
  );

  console.log(props.showTooltip);

  return (
    <div className="skills">
      {/* <hr></hr> */}
      <div className="skills-tree">
        <ul>
          <li>
            <OverlayTrigger
              key={"right"}
              trigger="manual"
              defaultShow={true}
              placement={"right"}
              delay={{ hide: 400 }}
              overlay={tooltip}
            >
              <button
                onClick={toggleHandler}
                className="skills-button"
                id={isShowFilter ? "isSkills-active" : "isSkills-deactive"}
              >
                SKILLS
              </button>
            </OverlayTrigger>

            <div className="middle-connection"></div>
            <div
              className="branches"
              id={isShowFilter ? "isFilter-true-branch" : "isFilter-branch"}
            >
              <div className="checking"></div>
              <div
                className="middle-branch"
                id={
                  hoverFilterButton.framework ||
                  hoverFilterButton.frontend ||
                  hoverFilterButton.backend ||
                  hoverFilterButton.data ||
                  hoverFilterButton.others
                    ? "branch-selected"
                    : "branch-notSelected"
                }
              ></div>

              {/* <!--    left branches      --> */}
              {/* frontend button */}
              <div
                className="left-zero-branch"
                id={
                  hoverFilterButton.frontend
                    ? "branch-selected"
                    : "branch-notSelected"
                }
              ></div>

              {/* backend button */}

              <div
                className="left-first-branch"
                id={
                  hoverFilterButton.backend || hoverFilterButton.frontend
                    ? "branch-selected"
                    : "branch-notSelected"
                }
              ></div>

              {/* <!--   right branches     --> */}
              {/* others button */}
              <div
                className="right-zero-branch"
                id={
                  hoverFilterButton.others
                    ? "branch-selected"
                    : "branch-notSelected"
                }
              ></div>

              {/* data button*/}

              <div
                className="right-first-branch"
                id={
                  hoverFilterButton.others || hoverFilterButton.data
                    ? "branch-selected"
                    : "branch-notSelected"
                }
              ></div>
            </div>

            {/* filter buttons */}
            <ul
              className="filter-ul"
              id={isShowFilter ? "isFilter-true-buttons" : "isFilter-buttons"}
            >
              <li>
                <div
                  className="frontend-connecting"
                  id={
                    hoverFilterButton.frontend
                      ? "connecting-selected"
                      : "connecting-notSelected"
                  }
                ></div>
                <button
                  className=" filter-button"
                  id="frontend-button"
                  onMouseEnter={(prevState) =>
                    setHoverFilterButton({
                      ...prevState,
                      frontend: !prevState.frontend,
                    })
                  }
                  onMouseLeave={(prevState) =>
                    setHoverFilterButton({
                      ...prevState,
                      frontend: false,
                    })
                  }
                >
                  frontend
                </button>
              </li>
              <li>
                <div
                  className="backend-connecting"
                  id={
                    hoverFilterButton.backend
                      ? "connecting-selected"
                      : "connecting-notSelected"
                  }
                ></div>
                <button
                  className="filter-button"
                  id="backend-button"
                  onMouseEnter={(prevState) =>
                    setHoverFilterButton({
                      ...prevState,
                      backend: !prevState.backend,
                    })
                  }
                  onMouseLeave={(prevState) =>
                    setHoverFilterButton({
                      ...prevState,
                      backend: false,
                    })
                  }
                >
                  backend
                </button>
              </li>
              <li>
                <div
                  className="framework-connecting"
                  id={
                    hoverFilterButton.framework
                      ? "connecting-selected"
                      : "connecting-notSelected"
                  }
                ></div>
                <button
                  className="filter-button"
                  id="framework-button"
                  onMouseEnter={(prevState) =>
                    setHoverFilterButton({
                      ...prevState,
                      framework: !prevState.framework,
                    })
                  }
                  onMouseLeave={(prevState) =>
                    setHoverFilterButton({
                      ...prevState,
                      framework: false,
                    })
                  }
                >
                  framework
                </button>
              </li>
              <li>
                <div
                  className="data-connecting"
                  id={
                    hoverFilterButton.data
                      ? "connecting-selected"
                      : "connecting-notSelected"
                  }
                ></div>
                <button
                  className="filter-button"
                  id="data-button"
                  onMouseEnter={(prevState) =>
                    setHoverFilterButton({
                      ...prevState,
                      data: !prevState.data,
                    })
                  }
                  onMouseLeave={(prevState) =>
                    setHoverFilterButton({
                      ...prevState,
                      data: false,
                    })
                  }
                >
                  data
                </button>
              </li>
              <li>
                <div
                  className="others-connecting"
                  id={
                    hoverFilterButton.others
                      ? "connecting-selected"
                      : "connecting-notSelected"
                  }
                ></div>
                <button
                  className="filter-button"
                  id="others-button"
                  onMouseEnter={(prevState) =>
                    setHoverFilterButton({
                      ...prevState,
                      others: !prevState.others,
                    })
                  }
                  onMouseLeave={(prevState) =>
                    setHoverFilterButton({
                      ...prevState,
                      others: false,
                    })
                  }
                >
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
