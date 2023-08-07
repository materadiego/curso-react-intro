import React, { useContext } from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";
import { useState } from "react";

function TodoForm() {
  const { addTask, setOpenModal } = useContext(TodoContext);

  const [newTaskValue, setNewTaskValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTask(newTaskValue);
    setOpenModal(false);
    setNewTaskValue("");
  };

  const onChange = (event) => {
    setNewTaskValue(event.target.value);
  };

  return (
    <form className="TodoForm" onSubmit={onSubmit}>
      <label className="TodoForm-Label">New task</label>
      <textarea
        className="TodoForm-Text"
        value={newTaskValue}
        onChange={onChange}
        maxLength={50}
        required
        placeholder="Take a nap.."
      />
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
