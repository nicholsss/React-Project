import React, { useState } from "react";
import "../App.css";
import styled from "styled-components";
import { connect } from "react-redux";
import { createRecipe } from "../reducers/recipeReducer";
import { useField } from "../hooks";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
  Label,
  List
} from "semantic-ui-react";
const RecipeForm = props => {
  const [title, setTitle] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [instruction, setInstruction] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState([]);

  //<Button onClick={event => setList(list => [...list, ingredient])}>Add a Ingerient</Button>
  const handleSubmit = async event => {
    event.preventDefault();
    props.createRecipe(title, category, ingredients, instruction);
    setTitle("");
    setIngredient("");
    setInstruction('')
  };
  const addIng = () => {
    setIngredients(ingredients => [...ingredients, ingredient]);
    setIngredient('')
  };
  return (
    <div className="ingredientInput">
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <h1>Recipe name</h1>
          <input
            type="string"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </Form.Field>

        {/* Active prop tähän, niin että yks nappi pysyy värjättynä kun sitä painaa.*/}

        <Form.Field>
  <h2>What category is your recipe: {category}</h2>

          <Button
            type="button"
            className={category === "Meat" ? "colored" : "5f6769"}
            onClick={() => setCategory("Meat")}
          >
            Meat
          </Button>
          <Button
            type="button"
            className={category === "Vegetarian" ? "colored" : "5f6769"}
            onClick={() => setCategory("Vegetarian")}
          >
            Vegetarian
          </Button>
          <Button
            type="button"
            className={category === "Soup" ? "colored" : "5f6769"}
            onClick={() => setCategory("Soup")}
          >
            Soup
          </Button>
          <Button
            type="button"
            className={category === "Fish" ? "colored" : "5f6769"}
            onClick={() => setCategory("Fish")}
          >
            Fish
          </Button>
        </Form.Field>
        

        <Form.Field>
          <input
            type="string"
            value={ingredient}
            onChange={({ target }) => setIngredient(target.value)}
          />
          <div>{/**/}</div>
          <Button
            type="button"
            onClick={addIng
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
        </Form.Field>

        <div className="guideInput">
          <h2>Add Recipe guide</h2>

          <textarea
            wid="true"
            value={instruction}
            onChange={({ target }) => setInstruction(target.value)}
          />

          {/* This button adds recipe*/}
          <Button type="submit">Create</Button>
        </div>
      </Form>
    </div>
  );
};

export default connect(null, {
  createRecipe
})(RecipeForm);

/*const Button = styled.button`
background:white

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid black;
border-radius: 3px;
`;
*/

/*const IngerientBtn = styled.button`
  /* Adapt the colors based on primary prop */
//background: white;
//font-size: 1em;
//margin: 1em;
//padding: 0.25em 1em;
//border: 2px solid black;
//border-radius: 3px;
//`;
