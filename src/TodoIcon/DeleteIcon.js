import React from "react";
import { TodoIcon } from "./";

function DeleteIcon({ onDelete }) {
  return <TodoIcon type="Delete" color="red" onClick={onDelete} />;
}

export { DeleteIcon };
