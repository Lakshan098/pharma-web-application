// import "../../../index.css";
import "./Search.css";
import React from "react";

function Search() {
  return (
    <div>
      <nav class="navbar-navbar-light-bg-light">
        <form class="form-inline">
          <input
            class="form-control-mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button class="btn-outline-success-my-2" type="submit">
            Search
          </button>
        </form>
      </nav>
    </div>
  );
}

export default Search;
