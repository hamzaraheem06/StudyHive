import React from "react";

function Button({ text, icon, onClickHandler, btnType, ...props }) {
  return (
    <button
      onClick={onClickHandler}
      className={`btn ${(props, btnType)} ${props.className}`}
    >
      {icon} {text}
    </button>
  );
}

export default Button;
