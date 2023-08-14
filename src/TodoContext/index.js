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
  const [createdValue, setCreatedValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [emptyList, setEmptyList] = useState(true);

  const completedTasks = tasks.filter((task) => !!task.completed).length;
  const totalTasks = tasks.length;

  const searchedTasks = tasks.filter((task) => {
    const taskText = task.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return taskText.includes(searchText);
  });

  const createdTask = (newKey) => {
    let created;
    const textIndex = tasks.findIndex((task) => task.text === newKey);
    if (textIndex === -1) {
      created = false;
    } else {
      created = true;
    }
    return created;
  };

  const addTask = (text, priority, priorityNumber) => {
    saveTasks(text, priority, priorityNumber);
    const newTasks = [...tasks];
    newTasks.push({ text, priority, priorityNumber, completed: false });
    const sortedNewTasks = newTasks.sort(function (a, b) {
      if (a.priorityNumber > b.priorityNumber) {
        return 1;
      }
      if (a.priorityNumber < b.priorityNumber) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    saveTasks(sortedNewTasks);
  };

  const completeTask = (text) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex((task) => task.text === text);
    if (newTasks[taskIndex].completed === false) {
      newTasks[taskIndex].completed = true;
    } else {
      newTasks[taskIndex].completed = false;
    }
    saveTasks(newTasks);
  };

  const deleteTask = (text) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex((task) => task.text === text);
    newTasks.splice(taskIndex, 1);
    saveTasks(newTasks);
  };

  const editTask = (key, newKey) => {
    const newTasks = [...tasks];
    const taskToEditIndex = newTasks.findIndex((task) => task.text === key);
    newTasks[taskToEditIndex].text = newKey;
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
        createdTask,
        completedTasks,
        totalTasks,
        searchValue,
        setSearchValue,
        emptyList,
        searchedTasks,
        completeTask,
        deleteTask,
        editTask,
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
