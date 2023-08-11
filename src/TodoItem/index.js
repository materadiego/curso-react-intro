import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li
      className={`Card ${
        props.completed ? `Card--Done` : `Card--Undone${props.priority}`
      }`}
    >
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
      <div className={`CardPriority CardPriority${props.priority}`}> </div>
      <p
        className={`CardText  ${
          props.completed ? "CardText--Done" : "CardText--Todo"
        }`}
      >
        {props.text}
      </p>

      <DeleteIcon onDelete={props.onDelete} />
    </li>
  );
}

export { TodoItem };
