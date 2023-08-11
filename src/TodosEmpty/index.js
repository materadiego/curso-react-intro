import React from "react";
import Icon2 from "./TaskIcon.png";
import "./TodosEmpty.css";

function TodosEmpty() {
  return (
    <p className="ListMessage">
      <img src={Icon2} alt="No-Task"></img>
      No pending tasks.<br></br> Add new task.
    </p>
  );
}

export { TodosEmpty };
