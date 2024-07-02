import { useTodos } from "./useTodos";

import "./App.css";
import { Background } from "../Background";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosEmpty } from "../TodosEmpty";
import { TodosLoading } from "../TodosLoading";
import { TodosEmptySearch } from "../TodosEmptySearch";
import { ChangeAlert } from "../ChangeAlert";

function App() {
  const {
    loading,
    returnMessage,
    error,
    createdTask,
    emptyList,
    searchedTasks,
    completeTask,
    deleteTask,
    editTask,
    openModal,
    setOpenModal,
    completedTasks,
    totalTasks,
    searchValue,
    setSearchValue,
    addTask,
    sincronizeTask,
  } = useTodos();
  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter totalTasks={totalTasks} completedTasks={completedTasks} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>
      <Background />

      <TodoList
        error={error}
        emptyList={emptyList}
        loading={loading}
        searchedTasks={searchedTasks}
        totalTasks={totalTasks}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        onEmptyTask={() => <TodosEmpty />}
        onEmptySearchedResults={(searchText) => (
          // <TodosEmptySearch text={searchText} />
          <p>No hay resultados para {searchText}</p>
        )}
        // render={(todo) => (
        //   <TodoItem
        //     returnMessage={returnMessage}
        //     onComplete={() => completeTask(todo.text)}
        //     onDelete={() => deleteTask(todo.text)}
        //     onEdit={editTask}
        //     createdTask={createdTask}
        //     text={todo.text}
        //     key={todo.text}
        //     completed={todo.completed}
        //     priority={todo.priority}
        //   />
        // )}
      >
        {(todo) => (
          <TodoItem
            returnMessage={returnMessage}
            onComplete={() => completeTask(todo.text)}
            onDelete={() => deleteTask(todo.text)}
            onEdit={editTask}
            createdTask={createdTask}
            text={todo.text}
            key={todo.text}
            completed={todo.completed}
            priority={todo.priority}
          />
        )}
      </TodoList>

      {/* <TodoList>
        {loading && (
          <>
            <TodosLoading /> <TodosLoading /> <TodosLoading /> <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        {!loading && emptyList && <TodosEmpty />}
        {searchedTasks.map((todo) => (
          <TodoItem
            returnMessage={returnMessage}
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
      </TodoList> */}
      <CreateTodoButton
        emptyList={emptyList}
        loading={loading}
        setOpenModal={setOpenModal}
      />

      <Modal openModal={openModal}>
        <TodoForm
          addTask={addTask}
          setOpenModal={setOpenModal}
          createdTask={createdTask}
        />
      </Modal>
      <ChangeAlert sincronize={sincronizeTask} />
    </>
  );
}

export default App;
