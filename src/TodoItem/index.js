import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import React, { useState } from "react";
import "./TodoItem.css";
import { TodosEditButton } from "../TodosEdition/TodosEditButton";
import { TodosSubmitEdition } from "../TodosEdition/TodosSubmitEdition";
import { TodosCloseEdition } from "../TodosEdition/TodosCloseEdition";

function TodoItem(props) {
  const [editable, setEditable] = useState(false);
  const taskName = props.text;
  const [newTaskName, setNewTaskName] = useState(taskName);

  const changeTask = (event) => {
    setNewTaskName(event.target.value);
    console.log(props.text);
  };

  const edit = () => {
    setEditable(true);
    console.log("editable");
  };

  const closeEdit = () => {
    setEditable(false);
    setNewTaskName(taskName);
    console.log(newTaskName);
    console.log("close edition");
  };

  const submitEdit = () => {
    //  validar que texto no exista
    if (props.createdTask(newTaskName)) {
      props.returnMessage(false);
      console.log("Already Created");
    } else {
      setEditable(false);
      console.log("submit edition");
      props.returnMessage(true);

      props.onEdit(props.text, newTaskName);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      submitEdit();
    }
  };

  return (
    <li
      className={`Card ${editable ? "Card--Editable" : "Card--Uneditable "}  ${
        props.completed
          ? `Card--Done`
          : `Card--Undone Card--Undone${props.priority}`
      }`}
    >
      {!editable && <TodosEditButton edit={edit} />}
      {editable && <TodosCloseEdition closeEdit={closeEdit} />}

      {editable && <TodosSubmitEdition sumbitEdit={submitEdit} />}

      {!editable && (
        <CompleteIcon
          editable={editable}
          completed={props.completed}
          onComplete={props.onComplete}
        />
      )}
      {!editable && (
        <div className={`CardPriority CardPriority${props.priority}`}> </div>
      )}
      {editable ? (
        <input
          onKeyDown={handleKeyDown}
          disabled={!editable}
          maxLength={38}
          value={newTaskName}
          onChange={changeTask}
          className={`CardText ${
            editable ? "CardText--Editable" : "CardText--Uneditable"
          }  ${props.completed ? "CardText--Done" : "CardText--Todo"} `}
        />
      ) : (
        <p
          className={`CardText ${
            editable ? "CardText--Editable" : "CardText--Uneditable"
          }  ${props.completed ? "CardText--Done" : "CardText--Todo"} `}
        >
          {props.text}
        </p>
      )}

      {!editable && <DeleteIcon onDelete={props.onDelete} />}
    </li>
  );
}

export { TodoItem };
