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
import { Divider, Grid, Image, Segment } from 'semantic-ui-react'
// <button onClick={() => remove(props.recipe)}>Delete</button>
//Tää komponentti näyttää klikatun reseptin tiedot
const Recipe = props => {

  
  console.log("object", props.users)

  if (props.recipe === undefined) {
    return null;
  }
  const remove = async recipe => {
    console.log("lol")
    const ok = window.confirm("Are u sure?")
    if(ok){
      props.removeRecipe(recipe)
    }
  }
  console.log("Recipe yks: ", props.recipe.user.username);
  console.log("ainesosaaaaaa", props.recipe.ingredient);
  
  return (
    <Segment>
      <Grid columns={2} relaxed='very'>
        <Grid.Column>
<p>Made by {props.recipe.user.username}</p>
      <h1>{props.recipe.title}</h1>
      <em><p>{props.recipe.category}</p></em>

      {props.recipe.ingredient.map(i => (
        <li key={i}>{i}</li>
      ))}
      </Grid.Column>
      <Grid.Column>
        
      <p>{props.recipe.instruction}</p>
      <button onClick ={() => remove(props.recipe)}>remove</button>
      </Grid.Column>
     
      </Grid>
    
      <Divider vertical>Instruction</Divider>
      
    </Segment>
    
    
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
