import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div
      onClick={props.onClick}
      className="
        fixed inset-0
        z-10
        bg-black/75
      "
    />,
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;