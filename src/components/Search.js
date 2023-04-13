import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <div>
      <label>Search for your favorite toy 🔎</label>
      <br />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </div>
  );
};

export default Search;
