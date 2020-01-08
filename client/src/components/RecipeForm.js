import React, { useState } from "react";
import "../App.css";
import styled from "styled-components";
import { connect } from "react-redux";
import { createRecipe } from "../reducers/recipeReducer";
import { useField } from "../hooks";

import { setNotification } from '../reducers/notificationReducer'
import Notification from './Notification'

const RecipeForm = props => {
  const [title, setTitle] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [instruction, setInstruction] = useState('');
  const [category, setCategory] = useState('');
  const [ingredients, setIngredients] = useState([]);
  
  const notify =(message, color ='succes') => {
    props.setNotification({message, color}, 10)
  }


  //<Button onClick={event => setList(list => [...list, ingredient])}>Add a Ingerient</Button>
  const handleSubmit =  event => {
    event.preventDefault();
   if(title && category  && ingredients && instruction){
      const recipe = { title, category, ingredients, instruction }
      props.createRecipe(recipe).then(notify(`${recipe.title} added!`))
    } else {
      notify('Please fill all fields', 'error')
    }
    
    setTitle('');
    setIngredients([]);
    setInstruction('')
  };

  const addIng = () => {
    
    //setIngredients(ingredients => [...ingredients, ingredient]);
    if(ingredient){
    setIngredients(ingredients.concat(ingredient))
    setIngredient('')
    }
  }

  const removeIng = (i) => {
    setIngredients(ingredients.filter(ing => ing !== i))
  }
 
  return (
   
    <div className="ingredientInput">
    <Notification/>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Recipe name</h1>
          <input
            type="text"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>

        {/* Active prop tähän, niin että yks nappi pysyy värjättynä kun sitä painaa.*/}

        <div>

          <h2>What category is your recipe {category}</h2>

          <button
            type="button"
            className={category === "Meat" ? "colored" : "5f6769"}
            onClick={() => setCategory("Meat")}
          >
            Meat
          </button>
          <button
            type="button"
            className={category === "Vegetarian" ? "colored" : "5f6769"}
            onClick={() => setCategory("Vegetarian")}
          >
            Vegetarian
          </button>
          <button
            type="button"
            className={category === "Soup" ? "colored" : "5f6769"}
            onClick={() => setCategory("Soup")}
          >
            Soup
          </button>
          <button
            type="button"
            className={category === "Fish" ? "colored" : "5f6769"}
            onClick={() => setCategory("Fish")}
          >
            Fish
          </button>
        </div>
        

        <div>
          <input
            type="text"
            value={ingredient}
            onChange={({ target }) => setIngredient(target.value)}
           
          />
          <div>{/**/}</div>
          <button
            type="button"
            onClick={addIng}
          
          >
            Add a Ingredient
          </button>
          <div>{/*index ei ole välttämättä paras ratkaisu tähän*/}</div>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}> {item} 
              <button
              type="button"
              onClick={() => removeIng(item)}>
                remove
              </button>
              </li>
            ))}
            
          </ul>
        </div>

        <div className="guideInput">
          <h2>Add Recipe guide</h2>
          <textarea
            wid="true"
            value={instruction}
            onChange={({ target }) => setInstruction(target.value)}
          />

          {/* This button adds recipe*/}
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
};

export default connect(null, {
  createRecipe,setNotification
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
