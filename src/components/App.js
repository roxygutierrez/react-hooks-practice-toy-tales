import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";
import Search from "./Search";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then((toyArr) => setToys(toyArr));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const addNewToy = (newToy) => {
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((r) => r.json())
      .then((savedToy) => {
        setToys([...toys, savedToy]);
      });
  };

  const handleDelete = (selectedToyId) => {
    fetch(`http://localhost:3001/toys/${selectedToyId}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        //filter
        const newToysArr = toys.filter((toy) => {
          return toy.id !== selectedToyId;
        });
        setToys(newToysArr);
      });
  };

  const handleLikes = (toy) => {
    console.log(toy);
    const toyCopy = { ...toy };
    ++toyCopy.likes;

    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toyCopy),
    })
      .then((r) => r.json())
      .then((updatedToy) => {
        const newToys = toys.map((toy) => {
          return toy.id === updatedToy.id ? updatedToy : toy;
        });
        setToys(newToys);
      });
  };

  const toysToDisplay = toys.filter((toy) => {
    return toy.name.toUpperCase().includes(search.toUpperCase());
  });

  const [showSearch, setShowSearch] = useState(false);

  const handleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy={addNewToy} /> : null}

      {showSearch ? <Search search={search} setSearch={setSearch} /> : null}

      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
        <button onClick={handleSearch}>Search for a Toy</button>
      </div>
      <ToyContainer
        toys={toysToDisplay}
        handleDelete={handleDelete}
        handleLikes={handleLikes}
      />
    </>
  );
}

export default App;
