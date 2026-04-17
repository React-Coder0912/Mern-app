import React, { useRef, Fragment } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import Backdrop from "./Backdrop";

const ModalOverlay = (props) => {
  return (
    <div
      ref={props.nodeRef}
      style={props.style}
      className={`
        fixed z-[100]
        top-[22vh] left-[10%]
        w-[80%]
        bg-white
        rounded-lg
        shadow-lg
        md:left-1/2 md:-translate-x-1/2 md:w-[40rem]
        ${props.className || ""}
      `}
    >
      {/* Header */}
      <header
        className={`
          w-full
          bg-purple-900
          text-white
          px-2 py-4
          ${props.headerClass || ""}
        `}
      >
        <h2 className="m-2 text-lg font-semibold">
          {props.header}
        </h2>
      </header>

      {/* Content */}
      <form
        onSubmit={
          props.onSubmit
            ? props.onSubmit
            : (e) => e.preventDefault()
        }
      >
        <div
          className={`px-2 py-4 ${props.contentClass || ""}`}
        >
          {props.children}
        </div>

        <footer
          className={`px-2 py-4 ${props.footerClass || ""}`}
        >
          {props.footer}
        </footer>
      </form>
    </div>
  );
};

const Modal = (props) => {
  const nodeRef = useRef(null);

  const content = (
    <ModalOverlay {...props} nodeRef={nodeRef} />
  );

  return (
    <Fragment>
      {props.show &&
        ReactDOM.createPortal(
          <Backdrop onClick={props.onCancel} />,
          document.getElementById("backdrop-hook")
        )}

      {ReactDOM.createPortal(
        <CSSTransition
          in={props.show}
          mountOnEnter
          unmountOnExit
          timeout={200}
          nodeRef={nodeRef}
          classNames={{
            enter: "opacity-0 -translate-y-40",
            enterActive:
              "opacity-100 translate-y-0 transition-all duration-200",
            exit: "opacity-100 translate-y-0",
            exitActive:
              "opacity-0 -translate-y-40 transition-all duration-200",
          }}
        >
          {content}
        </CSSTransition>,
        document.getElementById("modal-hook")
      )}
    </Fragment>
  );
};

export default Modal;