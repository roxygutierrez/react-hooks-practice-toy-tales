import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onHandleToyDelete, onHandleLike }) {
  return (
    <div id="toy-collection">
      {toys.map((toy, id) => {
        return (
          <ToyCard
            key={id}
            toy={toy}
            onHandleToyDelete={onHandleToyDelete}
            onHandleLike={onHandleLike}
          />
        );
      })}
    </div>
  );
}

export default ToyContainer;
