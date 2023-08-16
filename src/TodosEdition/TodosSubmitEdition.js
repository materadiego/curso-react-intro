import React from "react";
import "./TodosEdition.css";
import icon from "./submit.svg";

function TodosSubmitEdition({ submitEdit, closeEdit, onEdit }) {
  return (
    <span
      className={`EditionButtons EditionButtons--Submit`}
      onClick={submitEdit}
    >
      <img
        className="EditionButtons-ImageSubmit"
        src={icon}
        alt="Close-Edition"
      ></img>
    </span>
  );
}

export { TodosSubmitEdition };
