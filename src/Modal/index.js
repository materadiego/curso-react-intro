import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({ children, openModal }) {
  return ReactDOM.createPortal(
    <div
      className={`ModalBg ${openModal ? "ModalBg--Opened" : "ModalBg--Closed"}`}
    >
      {children}
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };
