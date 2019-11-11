import React, { useState } from "react";
import ReactDom from "react-dom";


export default function SearchForm(props) {
 console.log(props);
 const [ search, setSearch ] = useState("");
 const [ searchResults, setSearchResults ] = useState([]);

 const handleChange = e => {
   setSearch(e.target.value);
   const results = props.characters.filter(characters =>{
     characters.name.toLowerCase().includes(search)
   });
   setSearchResults(results);
   props.setCharacters(results);
 }
  return (
    <section className="search-form">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleChange}
      />
    </section>
  );
}

