import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((resp) => resp.json())
      .then((toyArr) => setToys(toyArr));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const handleAddNewToy = (newToy) => {
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

  const handleToyDelete = (toyId) => {
    fetch(`http://localhost:3001/toys/${toyId}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => {
        const filteredToys = toys.filter((toy) => {
          return toy.id !== toyId;
        });
        setToys(filteredToys);
      });
  };

  const handleLikes = (toyId, likes) => {
    fetch(`http://localhost:3001/toys/${toyId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: likes,
      }),
    })
      .then((resp) => resp.json())
      .then((updatedLikes) => {
        const updatedLikesArr = toys.map((toy) => {
          if (toy.id === toyId) {
            return updatedLikes;
          } else {
            return toy;
          }
        });
        setToys(updatedLikesArr);
      });
  };
  return (
    <>
      <Header />
      {showForm ? <ToyForm onHandleAddNewToy={handleAddNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toys={toys}
        onHandleToyDelete={handleToyDelete}
        onHandleLikes={handleLikes}
      />
    </>
  );
}

export default App;
