import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";





export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
const [characters, setCharacters] = useState([]);

useEffect(() => {
  axios
  .get(`https://rickandmortyapi.com/api/character/`)
  .then(response => {
    setCharacters(response.data.results);
  })
  .catch(error => {
    console.log(error)
  });
}, []);

  return (
  <section className="character-list">
      {characters.map((person) => (
        <CharacterCard char={person} key={person.id} />
      ))}
  </section>
  );
}
