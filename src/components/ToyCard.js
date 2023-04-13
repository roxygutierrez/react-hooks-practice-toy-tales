import React from "react";

function ToyCard({ toy, onHandleToyDelete, onHandleLike }) {
  const { id, name, image, likes } = toy;

  const handleDonationClick = () => {
    onHandleToyDelete(id);
  };
  const handleLikeClick = () => {
    onHandleLike(id, likes + 1);
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={handleDonationClick}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
