import React, { useState, useEffect } from "react";
import "./TypewriteStyle.css";

// const mechanism = {
//     deleting_speed: 30,
//     typing_speed: 150,
// }

// const Typewrite = ({ message, heading }) => {
//   const[state, setState] = useState({
//       text:"",
//       message:"",
//       isDeleting: false,
//       loopNum:0,
//       typingSpeed: mechanism.typing_speed,
//   });

//   useEffect(() => {
//       let timer="";
//       const handleType = () => {
//           setState( cs => ({
//             ...cs,
//             text: getCurrentText(cs),
//             typingSpeed: getTypingSpeed(cs)
//           }));

//       }
//   })

// };

const CONSTANTS = {
  DELETING_SPEED: 30,
  TYPING_SPEED: 180,
};

function TypeWriter({ messages }) {
  const [state, setState] = useState({
    text: "",
    message: "",
    isDeleting: false,
    loopNum: 0,
    typingSpeed: CONSTANTS.TYPING_SPEED,
  });

  useEffect(() => {
    let timer = "";
    const handleType = () => {
      setState((cs) => ({
        ...cs, // cs means currentState
        text: getCurrentText(cs),
        typingSpeed: getTypingSpeed(cs),
      }));
      timer = setTimeout(handleType, state.typingSpeed);
    };
    handleType();
    return () => clearTimeout(timer);
  }, [state.isDeleting]);

  useEffect(() => {
    if (!state.isDeleting && state.text === state.message) {
      setTimeout(() => {
        setState((cs) => ({
          ...cs,
          isDeleting: true,
        }));
      }, 800);
    } else if (state.isDeleting && state.text === "") {
      setState((cs) => ({
        ...cs, // cs means currentState
        isDeleting: false,
        loopNum: cs.loopNum + 1,
        message: getMessage(cs, messages),
      }));
    }
  }, [state.text, state.message, state.isDeleting, messages]);

  function getCurrentText(currentState) {
    return currentState.isDeleting
      ? currentState.message.substring(0, currentState.text.length - 1)
      : currentState.message.substring(0, currentState.text.length + 1);
  }

  function getMessage(currentState, data) {
    return data[Number(currentState.loopNum) % Number(data.length)];
  }

  function getTypingSpeed(currentState) {
    return currentState.isDeleting
      ? CONSTANTS.TYPING_SPEED
      : CONSTANTS.DELETING_SPEED;
  }

  return (
    <p className="typewriter-text">
      <span>{state.text}</span>
      <span id="cursor" />
    </p>
  );
}

export default TypeWriter;
