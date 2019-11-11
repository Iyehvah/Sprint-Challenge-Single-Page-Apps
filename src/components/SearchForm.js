import React, { useState } from "react";


export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = e => {
    setSearchTerm(e.target.value);
    const results = props.characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm)
    );

    setSearchResults(results);
    props.setCharacters(results);
    console.log(results)
  };

  return (
    <section className="search-form">
      <input 
        type="text"
        placeholder="search"
        value={searchTerm}
        onChange={handleChange}
        />
    </section>
  );
}

