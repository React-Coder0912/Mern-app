import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside
        onClick={props.onClick}
        className="
          fixed
          top-0 left-0
          z-[100]
          h-screen
          w-[70%] max-w-xs
          bg-white
          shadow-lg
        "
      >
        {props.children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("drawer-hook")
  );
};

export default SideDrawer;