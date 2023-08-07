import { useContext } from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  return (
    <section className="SearchContainer">
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Search task"
      />
    </section>
  );
}

export { TodoSearch };
