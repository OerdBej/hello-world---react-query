import React from "react";

// props the data from the server
export default function TheCharacters({ character }) {
  return (
    <div className="card">
      <img src={character.image} alt="an image" />
      <div className="text-container">
        <h3>{character.name}</h3>
        <p className="status">
          {character.status} - {character.species}
        </p>
        <p className="title">Last seen on</p>
        <p>{character.location.name}</p>
      </div>
    </div>
  );
}
