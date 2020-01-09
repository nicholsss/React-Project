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
   
    <Container>
    <Notification/>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <h1>Recipe name</h1>
          <input
            type="text"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </FormGroup>

        {/* Active prop tähän, niin että yks nappi pysyy värjättynä kun sitä painaa.*/}
        <h2>What category is your recipe {category}</h2>
        <ButtonGroup>

         
            {/*Nämä napit pitää luultavasti erottaa toisista napeista stailauksen vuoksi.*/}
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
        </ButtonGroup>
        

        <FormGroup>
          <input
            type="text"
            value={ingredient}
            onChange={({ target }) => setIngredient(target.value)}
           
          />
         
          <Button
            type="button"
            onClick={addIng}
          
          >
            Add a Ingredient
          </Button>
           {/*Listasta mahdollisesti scrollattava*/}
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}> {item} 
              <Button
              type="button"
              onClick={() => removeIng(item)}>
                remove
              </Button>
              </li>
            ))}
            
          </ul>
        </FormGroup>

        <FormGroup>
          <h2>Add Recipe guide</h2>
          <TextArea
            wid="true"
            value={instruction}
            onChange={({ target }) => setInstruction(target.value)}
          />

          {/* This button adds recipe*/}
          <Button type="submit">Create</Button>
        </FormGroup>
      </Form>
    </Container>
  );
};

export default connect(null, {
  createRecipe,setNotification
})(RecipeForm);

const Container = styled.div`
display:flex;
justify-content:center
`
const Form = styled.form`
border:solid 1px black;

justify-content:center;
background-color: #ede59a;
width: 80%;
padding: 50px;
height:100%;
  margin: 0 0 40px 0;
`
const FormGroup = styled.div`
margin-bottom: 40px;
display: flex;
justify-content: flex-start;
flex-direction: column;
flex-wrap: wrap;
`
const ButtonGroup = styled.div`
margin-bottom: 40px;
display: flex;
justify-content: center;

flex-wrap: wrap;
`

const Button = styled.button`
background-color:white;
margin:2px;
`

const TextArea = styled.textarea`
resize: none;
min-height: 100px;
padding:7px;
`
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
