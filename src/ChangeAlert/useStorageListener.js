import React from "react";
import { useState } from "react";

function useStorageListener(sincronize) {
  const [storageChange, setStorageChange] = useState(false);

  window.addEventListener("storage", (change) => {
    if (change.key === "MyTasksApp_v1") {
      console.log("hubo cambios en MyTasksApp_v1");
      setStorageChange(true);
    }
  });

  const toggleShow = () => {
    sincronize();
    setStorageChange(false);
  };

  return { show: storageChange, toggleShow };
}

export { useStorageListener };
