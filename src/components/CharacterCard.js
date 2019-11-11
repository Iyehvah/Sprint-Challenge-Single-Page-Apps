import React from "react";
import Styled from "styled-components";




const DivStyle = Styled.div`
  text-align: center;
  margin: 0 auto;
  background-color: black;
  color: white;
  padding: 20px;
  border-bottom: 5px solid red;
  font-size: 1.5rem;
  `;

export default function CharacterCard(props) {
  // console.log(props);
  return (
    <DivStyle>
      <h1>{props.character.name}</h1>
      <img src={props.character.image} alt="picture of character"></img>
      <h5>Gender: {props.character.gender}</h5>
      <h5>Status: {props.character.status}</h5>
    </DivStyle>
  )
};
