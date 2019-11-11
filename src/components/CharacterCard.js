import React from "react";
import styled from "styled-components";


export default function CharacterCard(props) {
  // console.log(props);
  return (
    <div>
      <h1>{props.char.name}</h1>
      <img src={props.char.image} alt="picture of character"></img>
      <h5>Gender: {props.char.gender}</h5>
      <h5>Status: {props.char.status}</h5>
    </div>
  )
};
