import React from "react";
import "./TodosEdition.css";
import icon from "./submit.svg";

function TodosSubmitEdition({ sumbitEdit, closeEdit, onEdit }) {
  return (
    <span
      className={`EditionButtons EditionButtons--Submit`}
      onClick={sumbitEdit}
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
