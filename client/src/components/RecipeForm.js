import React, { useState } from "react";
import "../App.css";
import styled from "styled-components";
import { connect } from "react-redux";
import { createRecipe } from "../reducers/recipeReducer";

const RecipeForm = props => {
  const [title, setTitle] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [instruction, setInstruction] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState([]);
  //handleri tekemään lisäyksen backendiin
  console.log("category", category);
  console.log("list ofingredient", ingredient);
  console.log("list", ingredients.id);

  //<Button onClick={event => setList(list => [...list, ingredient])}>Add a Ingerient</Button>
  const handleSubmit = async event => {
    event.preventDefault();
    console.log("recipe name", title);
    console.log("props name", props);
    console.log("recipe ingredients", ingredients);
    props.createRecipe(title, category, ingredients, instruction);
  };

  return (
    <div className="ingredientInput">
      <form onSubmit={handleSubmit}>
        <h1>Recipe name</h1>
        <input
          type="string"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />

        <h2>What category is your recipe</h2>
        <IngerientBtn type="button" onClick={() => setCategory("Meat")}>
          Meat
        </IngerientBtn>
        <IngerientBtn type="button" onClick={() => setCategory("Vegetarian")}>
          Vegetarian
        </IngerientBtn>
        <IngerientBtn type="button" onClick={() => setCategory("Soup")}>
          Soup
        </IngerientBtn>
        <IngerientBtn type="button" onClick={() => setCategory("Fish")}>
          Fish
        </IngerientBtn>

        <div>
          Ingerient
          <input
            type="string"
            value={ingredient}
            onChange={({ target }) => setIngredient(target.value)}
          />
          <div>{/**/}</div>
          <Button
            type="button"
            onClick={event =>
              setIngredients(ingredients => [...ingredients, ingredient])
            }
          >
            Add a Ingerient
          </Button>
          <div>{/*index ei ole välttämättä paras ratkaisu tähän*/}</div>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
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
        </div>
      </form>
    </div>
  );
};

export default connect(
  null,
  {
    createRecipe
  }
)(RecipeForm);

const Button = styled.button`
/* Adapt the colors based on primary prop */
background:white

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid black;
border-radius: 3px;
`;

const IngerientBtn = styled.button`
  /* Adapt the colors based on primary prop */
  background: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
`;
