import React from "react";
import { TodoIcon } from "./";

function CompleteIcon({ completed, onComplete }) {
  return <TodoIcon type="Check" completed={completed} onClick={onComplete} />;
}

export { CompleteIcon };
