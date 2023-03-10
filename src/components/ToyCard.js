import React from "react";

function ToyCard({ toy, onHandleToyDelete, onHandleLikes }) {
  const { id, name, image, likes } = toy;

  const handleDonateClick = (e) => {
    onHandleToyDelete(id);
  };

  const handleLikeClick = () => {
    onHandleLikes(id, likes + 1);
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>
        Like {"👍🏻"}
      </button>
      <button className="del-btn" onClick={handleDonateClick}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
