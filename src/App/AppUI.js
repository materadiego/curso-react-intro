import React from "react";
import { Background } from "../Background";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { TodosEmpty } from "../TodosEmpty";
import { TodoContext } from "../TodoContext";
import { useContext } from "react";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {
  const {
    loading,
    error,
    createdTask,
    emptyList,
    searchedTasks,
    completeTask,
    deleteTask,
    editTask,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <>
      <Background />
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && (
          <>
            <TodosLoading /> <TodosLoading /> <TodosLoading /> <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        {!loading && emptyList && <TodosEmpty />}
        {searchedTasks.map((todo) => (
          <TodoItem
            onComplete={() => completeTask(todo.text)}
            onDelete={() => deleteTask(todo.text)}
            onEdit={editTask}
            createdTask={createdTask}
            text={todo.text}
            key={todo.text}
            completed={todo.completed}
            priority={todo.priority}
          />
        ))}
      </TodoList>
      <CreateTodoButton
        emptyList={emptyList}
        loading={loading}
        setOpenModal={setOpenModal}
      />

      <Modal openModal={openModal}>
        <TodoForm />
      </Modal>
    </>
  );
}

export { AppUI };
