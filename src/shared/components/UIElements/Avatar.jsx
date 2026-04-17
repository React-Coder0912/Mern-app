import React from "react";

const Avatar = (props) => {
  return (
    <div
      className={`
        flex items-center justify-center
        w-full h-full
        ${props.className || ""}
      `}
      style={props.style}
    >
      <img
        src={props.image}
        alt={props.alt}
        className="block w-full h-full rounded-full object-cover"
        style={{
          width: props.width,
          height: props.width
        }}
      />
    </div>
  );
};

export default Avatar;