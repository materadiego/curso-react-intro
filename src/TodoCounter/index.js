import React from "react";
import Icon1 from "./HeroIcon.png";
import "./TodoCounter.css";

function TodoCounter({ completedTasks, totalTasks, loading }) {
  return (
    <section className={`TodoCounterContainer `}>
      <h1>
        {" "}
        <img src={Icon1} alt=""></img>MyTasks
      </h1>
      <h2 className={`TodoCounter ${!!loading && "TodoCounter--Loading"}`}>
        Completed tasks:{" "}
        <span>
          {completedTasks}/{totalTasks}
        </span>
      </h2>
    </section>
  );
}

export { TodoCounter };
