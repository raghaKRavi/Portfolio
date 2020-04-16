import React, { useState, useEffect } from "react";

const TypewriteAnimation = () => {
  const testString = "Test String!";
  const subStrings = testString.substring(0, testString.length - 1);

  //   Recurssive function
  //   useEffect(() => {
  //     const callback = () => {
  //       console.log("time out checking!!!");
  //       console.log("I was called");
  //       setTimeout(callback, 3000);
  //     };
  //     callback();
  //   });

  const [seconds, setSeconds] = useState(0);
  let interval = "";
  useEffect(() => {
    let interval = setInterval(() => {
      if (interval === 10) {
        console.log("reached...!!");
        clearInterval(interval);
      }
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  }, []);

  return (
    <>
      <p>{seconds}</p>
    </>
  );
};

export default TypewriteAnimation;
