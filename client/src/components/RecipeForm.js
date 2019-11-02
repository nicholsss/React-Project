import React, { useState } from "react";
import "../App.css";
import styled from "styled-components";
import { connect } from "react-redux";
import { createRecipe } from "../reducers/recipeReducer";

const RecipeForm = props => {
  const [ingredient, setIngredient] = useState("");
  const [instruction, setInstruction] = useState("");
  const [category, setCategory] = useState("");
  //const [list, setList] = useState([])
  //handleri tekemään lisäyksen backendiin
  console.log("category", category);
  console.log("list ofingredient", ingredient);
  //console.log("list", list);

  //<Button onClick={event => setList(list => [...list, ingredient])}>Add a Ingerient</Button>
  const handleSubmit = async event => {
    event.preventDefault();

    props.createRecipe(category.value, ingredient.value,instruction.value)
  };

  return (
    <div className="ingredientInput">
      <h1>Recipe name</h1>
      <input />

      <h1>What category is your recipe</h1>

      <Button onClick={() => setCategory("Meat")}>Meat</Button>
      <Button onClick={() => setCategory("Vegetarian")}>Vegetarian</Button>
      <Button onClick={() => setCategory("Soup")}>Soup</Button>
      <Button onClick={() => setCategory("Fish")}>Fish</Button>

      <h2>Add a recipe</h2>

      <form onSubmit={handleSubmit}>
        <div>
          Ingerient
          <input
            type="string"
            value={ingredient}
            onChange={({ target }) => setIngredient(target.value)}
          />
        </div>
        <div>{/* List that shows  ingredients*/}</div>
        <Button>Add a Ingerient</Button>
     

      <div className="guideInput">
        <h2>Add Recipe guide</h2>

        
          <div>
            <textarea
              type="string"
              value={instruction}
              onChange={({ target }) => setInstruction(target.value)}
            />
          </div>
          {/* This button adds recipe*/}
          <Button type="submit">Create</Button>
          
        
      </div>
      </form>
    </div>
  );
};

export default connect(
  null,
  {
    RecipeForm,createRecipe
  }
)(RecipeForm);

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
