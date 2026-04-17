import React from "react";

const Card = (props) => {
  return (
    <div
      className={`
        bg-white
        rounded-md
        shadow-md
        p-4
        overflow-hidden
        ${props.className || ""}
      `}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default Card;