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
const MyRecipeList = props => {
  const [category, setCategory] = useState("");

  const recipeByUser = props.users.find(
    re => re.username === props.user.username
  );
  const recipesToShow = category
  ?recipeByUser && recipeByUser.recipes.filter (recipe => recipe.category.toUpperCase().includes(category.toUpperCase()))
  :recipeByUser && recipeByUser.recipes

  return (
    <Card.Group>
     
      <h2>What kind recipes u wanna see?</h2>
  
    <Button onClick={() => setCategory("")} >All</Button>
    <Button onClick={() => setCategory("Meat")} >Meat</Button>
    <Button onClick={() => setCategory("Vegetarian")}>Vegetarian</Button>
    <Button onClick={() => setCategory("Soup")}>Soup</Button>
    <Button onClick={() => setCategory("Fish")}>Fish</Button>
    
 
      {/*
      recipeByUser && recipeByUser katsoo että ei ole tyhjä.
       */}
       
      {recipesToShow && recipesToShow.map(recipe => (
        
          
          <Link key={recipe.id} to={`/recipes/${recipe.id}`}>
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
