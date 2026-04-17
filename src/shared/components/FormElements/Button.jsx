import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const Button = (props) => {
  const classes = `
    button 
    button--${props.size || "default"} 
    ${props.inverse ? "button--inverse" : ""} 
    ${props.danger ? "button--danger" : ""}
  `;

  // External link
  if (props.href) {
    return (
      <a className={classes} href={props.href}>
        {props.children}
      </a>
    );
  }

  // Internal router link (React Router v6)
  if (props.to) {
    return (
      <Link to={props.to} className={classes}>
        {props.children}
      </Link>
    );
  }

  // Regular button
  return (
    <button
      className={classes}
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;