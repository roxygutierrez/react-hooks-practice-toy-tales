import React from "react";

function ToyCard({ toy, handleDelete, handleLikes }) {
  const { id, name, image, likes } = toy;

  const handleClick = (e) => {
    console.log(e);
    //invoke func that handles delete
    handleDelete(id);
  };

  const handleLikeClick = () => {
    handleLikes(toy);
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={handleClick}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
