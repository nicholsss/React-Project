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
  const [list, setList] = useState([])
  //handleri tekemään lisäyksen backendiin
  console.log("category", category);
  console.log("list ofingredient", ingredient);
  console.log("list", list.id);

  //<Button onClick={event => setList(list => [...list, ingredient])}>Add a Ingerient</Button>
  const handleSubmit = async (event) => {
    event.preventDefault();

    props.createRecipe(title.value,instruction.value);
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
      <IngerientBtn onClick={() => setCategory("Meat")}>Meat</IngerientBtn>
      <IngerientBtn onClick={() => setCategory("Vegetarian")}>Vegetarian</IngerientBtn>
      <IngerientBtn onClick={() => setCategory("Soup")}>Soup</IngerientBtn>
      <IngerientBtn onClick={() => setCategory("Fish")}>Fish</IngerientBtn>
      
        <div>
          Ingerient
          <input
            type="string"
            value={ingredient}
            onChange={({ target }) => setIngredient(target.value)}
          />
        
        <div>{/**/}</div>
        <Button type ="button"onClick={event => setList(list => [...list, ingredient])}>Add a Ingerient</Button>
        <div>{/*index ei ole välttämättä paras ratkaisu tähän*/}</div>
       <ul >{list.map((item,index) => <li key={index}>{item}</li>)}</ul>
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
