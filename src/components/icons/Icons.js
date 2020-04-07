import React from "react";
import "./IconStyle.css";

const Icons = (props) => {
  return (
    <>
      <div className="icons">
        <i className={props.name}></i>
      </div>
    </>
  );
};

export default Icons;
