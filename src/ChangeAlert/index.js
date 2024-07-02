import React from "react";
import { useStorageListener } from "./useStorageListener";
import "./ChangeAlert.css";

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);
  if (show) {
    return (
      <div className="ChangeAlert">
        <p>Hubo cambios</p>
        <button onClick={() => toggleShow(false)}>
          {" "}
          Volver a cargar la información
        </button>
      </div>
    );
  }
}

export { ChangeAlert };
