import searchImage from "./search.png";

import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue, loading }) {
  return (
    <section className="SearchContainer">
      <input
        disabled={loading}
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
