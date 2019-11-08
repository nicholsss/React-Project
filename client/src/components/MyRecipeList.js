import React, { useState } from "react";
import "../App.css";
import styled from "styled-components";
import { connect } from "react-redux";
import { createRecipe } from "../reducers/recipeReducer";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
//TÄÄ KOKO KOMPONENTTI TÄYSIN KESKEN JA IHAN SEKASIN
const MyRecipeList = ({user}) => {
  console.log("USEIRURHRSR", user.recipes)
  const [category, setCategory] = useState("");
  console.log("userasrasrasafsafaaf",user)
  /* Ohjelma kokoajan printtaa tätä consolee*/
  // console.log("mika taa on",props.recipes)

  return (
    <div>
      {/*
      <h2>What kind recipes u wanna see?</h2>
       Nämä mielellään allekkain 2 riveissä 
       Nää ei tee mitään tällä hetkellä
       
    <Button onClick={() => setCategory("Meat")} >Meat</Button>
    <Button onClick={() => setCategory("Vegetarian")}>Vegetarian</Button>
    <Button onClick={() => setCategory("Soup")}>Soup</Button>
    <Button onClick={() => setCategory("Fish")}>Fish</Button>
  */}
  
    <h1>OK</h1>
    </div>
  );
};


export default (MyRecipeList);

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
  margin: 0 1em;
  padding: 0.25em 1em;
`;