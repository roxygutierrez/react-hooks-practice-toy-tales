import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, handleDelete, handleLikes }) {
  return (
    <div id="toy-collection">
      {toys.map((toy) => {
        return (
          <ToyCard
            key={toy.id}
            toy={toy}
            handleLikes={handleLikes}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}

export default ToyContainer;
