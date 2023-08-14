import React from "react";
import "./TodosEdition.css";
import icon from "./edit.svg";

function TodosEditButton({ edit }) {
  return (
    <span className="EditionButtons EditionButtons--Open" onClick={edit}>
      <img
        className="EditionButtons-ImageOpen"
        src={icon}
        alt="Close-Edition"
      ></img>
    </span>
  );
}

export { TodosEditButton };
