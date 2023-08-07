import React, { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: tasks,
    saveItem: saveTasks,
    loading,
    error,
  } = useLocalStorage("MyTasksApp_v1", []);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [emptyList, setEmptyList] = useState(true);

  const completedTasks = tasks.filter((task) => !!task.completed).length;
  const totalTasks = tasks.length;

  const searchedTasks = tasks.filter((task) => {
    const taskText = task.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return taskText.includes(searchText);
  });

  const addTask = (text) => {
    saveTasks(text);
    const newTasks = [...tasks];
    newTasks.push({ text, completed: false });
    saveTasks(newTasks);
  };

  const completeTask = (text) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex((task) => task.text === text);
    newTasks[taskIndex].completed = true;
    saveTasks(newTasks);
  };

  const deleteTask = (text) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex((task) => task.text === text);
    newTasks.splice(taskIndex, 1);
    saveTasks(newTasks);
  };

  useEffect(() => {
    if (tasks.length === 0) {
      setEmptyList(true);
    } else {
      setEmptyList(false);
    }
  }, [tasks.length]);
  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTasks,
        totalTasks,
        searchValue,
        setSearchValue,
        emptyList,
        searchedTasks,
        completeTask,
        deleteTask,
        openModal,
        setOpenModal,
        addTask,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
