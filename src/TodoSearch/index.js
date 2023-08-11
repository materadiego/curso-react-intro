import { useContext } from "react";
import searchImage from "./search.png";
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
      <div className="SearchImageContainer">
        <img src={searchImage} alt="Search"></img>
      </div>
    </section>
  );
}

export { TodoSearch };
