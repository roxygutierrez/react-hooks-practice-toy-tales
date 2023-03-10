import React, { useState } from "react";

function ToyForm({ onHandleAddNewToy }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [likes, setLikes] = useState(0);

  const handleSubmit = (e, index) => {
    e.preventDefault();
    console.log("submitted");
    onHandleAddNewToy({
      id: index,
      name: name,
      image: image,
      likes: likes,
    });
    setName("");
    setImage("");
  };

  const handleNewToyName = (e) => {
    setName(e.target.value);
  };

  const handleNewImage = (e) => {
    setImage(e.target.value);
  };

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNewToyName}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          value={image}
          onChange={handleNewImage}
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
