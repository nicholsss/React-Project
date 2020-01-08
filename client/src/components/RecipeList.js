import React, { useState } from "react";
import "../App.css";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
//TÄÄ KOKO KOMPONENTTI TÄYSIN KESKEN JA IHAN SEKASIN
const RecipeList = props => {
  const [category, setCategory] = useState("");

  const recipesToShow = category
    ? props.recipes.filter(recipe =>
        recipe.category.toUpperCase().includes(category.toUpperCase())
      )
    : props.recipes;

  return (
    <Cont>
       <h2>What kind recipes u wanna see?</h2>
    <Container>

      
      
      {/* setCategory(category.concat("Meat"))   */}
      <button onClick={() => setCategory("")}>All</button>
      <button onClick={() => setCategory("Meat")}>Meat</button>
      <button onClick={() => setCategory("Vegetarian")}>Vegetarian</button>
      <button onClick={() => setCategory("Soup")}>Soup</button>
      <button onClick={() => setCategory("Fish")}>Fish</button>
      
</Container>
<Container>
      {recipesToShow.map(recipe => (
        <Link key={recipe.id} to={`/recipes/${recipe.id}`}>
          <Card>
            <Cover>
              <h1>{recipe.title}</h1>
            </Cover>
            <Content>
              {recipe.category}
              <br />
              {recipe.likes}
            </Content>
            
          </Card>
          </Link>
      ))}
    </Container>
    </Cont>
  );
};

const MapStateToProps = state => {
  return {
    recipes: state.recipes
  };
};

export default connect(MapStateToProps)(RecipeList);

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
const Cont = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const Container = styled.div`
display:flex;
flex-wrap:wrap;


`
const Card = styled.div`
width:225px;

  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin: 10px 0px 10px 5px;
`;
const Cover = styled.div`
  height: 150px;
  width: 100%;
  background-color:pink;
`;
const Content = styled.div`
flex:1;
`
