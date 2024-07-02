import React from "react";
import "./TodoList.css";

function TodoList(props) {
  const renderFunc = props.children || props.render;

  return (
    <section className="TodoListContainer">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {!props.loading && props.emptyList && props.onEmptyTask()}

      {!!props.totalTasks &&
        !props.searchedTasks.length &&
        props.onEmptySearchedResults(props.searchText)}

      {!props.loading && !props.error && props.searchedTasks.map(renderFunc)}
      {/* <ul className="TodoList">{props.children}</ul> */}
    </section>
  );
}

export { TodoList };
