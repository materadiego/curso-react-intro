import React, { useContext } from "react";
import Icon1 from "./HeroIcon.png";
import Icon2 from "./TaskIcon.png";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { completedTasks, totalTasks } = useContext(TodoContext);

  return (
    <section className="TodoCounterContainer">
      <h1>
        {" "}
        <img src={Icon1} alt=""></img>MyTasks
      </h1>
      <h2>
        Completed tasks:{" "}
        <span>
          {completedTasks}/{totalTasks}
        </span>
      </h2>
    </section>
  );
}

export { TodoCounter };
