import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";


export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then((response) => {
        setCharacter(response.data.results);
        props.setCharacters(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <section className="character-list">
      {props.filteredCharacters.map((person) => (
        <CharacterCard character={person} key={person.id} />
      ))}
    </section>
  );
}
