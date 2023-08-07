import React from "react";
import add from "./add.png";
import "./CreateTodoButton.css";

function CreateTodoButton({ emptyList, loading, setOpenModal }) {
  return (
    <>
      {loading ? (
        <div className="ButtonLoading"></div>
      ) : (
        <button
          onClick={() => setOpenModal((state) => !state)}
          className="AddButton"
        >
          <span
            className={`AddButton-Animation  ${
              emptyList ? "AddButton-Animation--1" : "AddButton--Static"
            }`}
          ></span>
          <span
            className={`AddButton-Animation  ${
              emptyList ? "AddButton-Animation--2" : "AddButton--Static"
            }`}
          ></span>

          <img src={add} alt="add"></img>
        </button>
      )}
    </>
  );
}

export { CreateTodoButton };
