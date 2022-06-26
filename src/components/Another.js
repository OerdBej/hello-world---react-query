import React, { useEffect, useState } from "react";

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log(data);
    setCharacters(data.results);
  };
  useEffect(() => {
    fetchCharacters();
  }, []);

  console.log(characters);

  return (
    <div>
      {characters.map((character) => (
        <div>{character.name}</div>
      ))}
    </div>
  );
}

// first version of data for making query API in comparision to Characters.js
