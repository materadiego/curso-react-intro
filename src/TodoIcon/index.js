import React from "react";
import { ReactComponent as CheckSVG } from "./check.svg";
import { ReactComponent as DeleteSVG } from "./add.svg";
import "./TodoIcon.css";

const iconTypes = {
  Check: <CheckSVG className={`Icon-svg Icon-svg--Check`} />,
  Delete: <DeleteSVG className="Icon-svg Icon-svg--Delete" />,
};

function TodoIcon({ type, completed, onClick }) {
  return (
    <span
      className={`CardIconContainer CardIconContainer${type}  ${
        completed ? "CardCheck--Done" : "CardCheck--Undone"
      }`}
      onClick={onClick}
    >
      {iconTypes[type]}
    </span>
  );
}

export { TodoIcon };
