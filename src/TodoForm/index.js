import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import { useState } from "react";
import icon from "./TodoFormIcon.svg";
import arrow from "./arrow-right.svg";

import "./TodoForm.css";

function TodoForm() {
  const { addTask, setOpenModal } = useContext(TodoContext);

  const [newTaskValue, setNewTaskValue] = useState("");
  const [newTaskPriority, setNewTaskPriority] = useState("High");
  const [newTaskPriorityNumber, setNewTaskPriorityNumber] = useState(1);

  const onSubmit = (event) => {
    event.preventDefault();
    addTask(newTaskValue, newTaskPriority, newTaskPriorityNumber);
    setOpenModal(false);
    setNewTaskValue("");
  };

  const onChangeText = (event) => {
    setNewTaskValue(event.target.value);
  };

  const onChangePriority = (event) => {
    const p = event.target.value;
    setNewTaskPriority(p);
    if (p === "High") {
      setNewTaskPriorityNumber(1);
    } else if (p === "Medium") {
      setNewTaskPriorityNumber(2);
    } else if (p === "Low") {
      setNewTaskPriorityNumber(3);
    }
  };

  return (
    <form className="TodoForm" onSubmit={onSubmit}>
      <div className="TodoFormIconContainer">
        <img className="TodoFormIcon" src={icon} alt="FormIcon"></img>
      </div>
      <label className="TodoForm-Label">New task</label>
      <textarea
        className="TodoForm-Text"
        value={newTaskValue}
        onChange={onChangeText}
        maxLength={38}
        required
        placeholder="Take a nap.."
      />
      <div className="TodoForm-PriorityContainer">
        <label className="TodoForm-PriorityLabel">Priority</label>
        <input
          type="button"
          value="Low"
          onClick={onChangePriority}
          className={`TodoForm-PriorityButton TodoForm-PriorityButton--Low ${
            newTaskPriority === "Low"
              ? "TodoForm-PriorityButton--Active1"
              : "TodoForm-PriorityButton--Inactive"
          }`}
        />
        <input
          type="button"
          value="Medium"
          onClick={onChangePriority}
          className={`TodoForm-PriorityButton TodoForm-PriorityButton--Medium ${
            newTaskPriority === "Medium"
              ? "TodoForm-PriorityButton--Active2"
              : "TodoForm-PriorityButton--Inactive"
          }`}
        />
        <input
          type="button"
          value="High"
          onClick={onChangePriority}
          className={`TodoForm-PriorityButton TodoForm-PriorityButton--High ${
            newTaskPriority === "High"
              ? "TodoForm-PriorityButton--Active3"
              : "TodoForm-PriorityButton--Inactive"
          }`}
        />
      </div>
      <button
        type="button"
        onClick={() => setOpenModal(false)}
        className="TodoForm-Button TodoForm-Button--Back"
      >
        Back
      </button>
      <button type="submit" className="TodoForm-Button TodoForm-Button--Add">
        Add
      </button>
    </form>
  );
}

export { TodoForm };
