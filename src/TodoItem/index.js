import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className={`Card ${props.completed ? "Card--Done" : "Card--Undone"}`}>
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
      {/* <span
        onClick={props.onComplete}
        className={`CardCheck ${
          props.completed ? "CardCheck--Done" : "CardCheck--Todo"
        }`}
      >
        <img src={check} alt="check"></img>
      </span> */}
      <p
        className={`CardText  ${
          props.completed ? "CardText--Done" : "CardText--Todo"
        }`}
      >
        {props.text}
      </p>
      <DeleteIcon onDelete={props.onDelete} />
      {/* <span className="CardDelete" onClick={props.onDelete}>
        <img src={errase} alt="errase"></img>
      </span> */}
    </li>
  );
}

export { TodoItem };
