import React, { useState, useEffect } from "react";
import Search from "./Search";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);
  const [searchedText, setSearchedText] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((resp) => resp.json())
      .then((toysArr) => setToys(toysArr));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const handleFormSubmit = (newToy) => {
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((resp) => resp.json())
      .then((savedToy) => setToys([...toys, savedToy]));
  };

  const handleToyDelete = (toyID) => {
    fetch(`http://localhost:3001/toys/${toyID}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => {
        const newToyArr = toys.filter((toy) => {
          return toy.id !== toyID;
        });
        setToys(newToyArr);
      });
  };

  const handleLikes = (toyID, likes) => {
    fetch(`http://localhost:3001/toys/${toyID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: likes }),
    })
      .then((resp) => resp.json())
      .then((toyUpdate) => {
        setToys(
          toys.map((toy) => {
            if (toy.id === toyUpdate.id) {
              return toyUpdate;
            } else {
              return toy;
            }
          })
        );
      });
  };

  const toysToDisplay = toys.filter((toy) => {
    return toy.name.toUpperCase().includes(searchedText.toUpperCase());
  });

  return (
    <>
      <Header />
      {showForm ? <ToyForm onFormSubmit={handleFormSubmit} /> : null}
      <Search handleSearch={setSearchedText} />
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toys={toysToDisplay}
        onHandleLike={handleLikes}
        onHandleToyDelete={handleToyDelete}
      />
    </>
  );
}

export default App;
