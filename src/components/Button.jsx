import React from "react";

function Button({ text, onClickHandler, btnType, ...props }) {
  return (
    <button onClick={onClickHandler} className={`btn ${(props, btnType)}`}>
      {text}
    </button>
  );
}

export default Button;
