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
import { Card } from "semantic-ui-react";
//TÄÄ KOKO KOMPONENTTI TÄYSIN KESKEN JA IHAN SEKASIN
const MyRecipeList = props => {
  //console.log("USEIRURHRSR", user.recipes)
  const [category, setCategory] = useState("");
  console.log("userasrasrasafsafaaf", props.user.username);
  console.log("object", props.users);
  const recipeByUser = props.users.find(
    re => re.username === props.user.username
  );

  /* Ohjelma kokoajan printtaa tätä consolee*/
  // console.log("mika taa on",props.recipes)

  return (
    <Card.Group>
      {/*
      <h2>What kind recipes u wanna see?</h2>
       Nämä mielellään allekkain 2 riveissä 
       Nää ei tee mitään tällä hetkellä
       
    <Button onClick={() => setCategory("Meat")} >Meat</Button>
    <Button onClick={() => setCategory("Vegetarian")}>Vegetarian</Button>
    <Button onClick={() => setCategory("Soup")}>Soup</Button>
    <Button onClick={() => setCategory("Fish")}>Fish</Button>
     <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
    
  */}
      {/*
      recipeByUser && recipeByUser katsoo että ei ole tyhjä.
       */}
       
      {recipeByUser &&
        recipeByUser.recipes.map(recipe => (
        
          
          <Link to={`/recipes/${recipe.id}`}>
            <Card>
              <Card.Content >
                <Card.Header>{recipe.title}</Card.Header>
                <Card.Meta>{recipe.category}</Card.Meta>

                
              </Card.Content>
            </Card>
          </Link>
        ))}
    </Card.Group>
  );
};

const MapStateToProps = state => {
  return {
    recipes: state.recipes,
    user: state.user,
    users: state.users
  };
};

export default connect(MapStateToProps)(MyRecipeList);

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
