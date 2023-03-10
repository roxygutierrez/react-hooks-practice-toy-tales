import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onHandleToyDelete, onHandleLikes }) {
  const renderEachToy = toys.map((toy, index) => {
    return (
      <ToyCard
        key={index}
        toy={toy}
        onHandleToyDelete={onHandleToyDelete}
        onHandleLikes={onHandleLikes}
      />
    );
  });
  return <div id="toy-collection">{renderEachToy}</div>;
}

export default ToyContainer;
