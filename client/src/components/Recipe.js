import React, { useState } from "react";
import "../App.css";
import styled from "styled-components";
import { connect } from "react-redux";
import {removeRecipe } from "../reducers/recipeReducer";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
//Tää komponentti näyttää klikatun reseptin tiedot
const Recipe = props => {

  
  

  if (props.recipe === undefined) {
    return null;
  }
  const remove = async recipe => {
    const ok = window.confirm("Are u sure?")
    if(ok){
      props.removeRecipe(recipe)
    }
  }
  console.log("Recipe yks: ", props.recipe.id);
  console.log("ainesosaaaaaa", props.recipe.ingredient);
  
  return (
    <div>
      <h1>{props.recipe.title}</h1>
      <p>{props.recipe.category}</p>

      {props.recipe.ingredient.map(i => (
        <li key={i}>{i}</li>
      ))}
      <p>{props.recipe.instruction}</p>
      <button onClick={() => remove(props.recipe)}>Delete</button>
    </div>
    
  );
};

const MapStateToProps = state => {
  return {
    recipes: state.recipes
  };
};
const mapDispatchToProps ={
  removeRecipe
}


export default connect(MapStateToProps,mapDispatchToProps)(Recipe);
