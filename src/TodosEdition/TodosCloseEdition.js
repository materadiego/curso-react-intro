import React from "react";
import "./TodosEdition.css";
import icon from "./close.svg";

function TodosCloseEdition({ closeEdit }) {
  return (
    <span
      className={`EditionButtons EditionButtons--Close`}
      onClick={closeEdit}
    >
      <img
        className="EditionButtons-ImageClose"
        src={icon}
        alt="Close-Edition"
      ></img>
    </span>
  );
}

export { TodosCloseEdition };
