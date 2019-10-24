import React, { useState } from "react";
import '../App.css';
import styled from 'styled-components'
import { connect } from 'react-redux'

const RecipeForm = (props) => {
  const [ingredient, setIngredient] = useState("");
  const [guide, setGuide] = useState("");

//handleri tekemään lisäyksen backendiin
console.log('aineosat', ingredient)


  return (
      
    <div className="ingredientInput">
      <h2>Add a recipe</h2>
     
     
      <form >
        <div>
          Ingerient
          <input
            type="string"
            value={ingredient}
            onChange={({ target }) => setIngredient(target.value)}
          />
        </div>
        <div>
          {/* List that shows  ingredients*/}  
        </div>
        <Button>Add a Ingerient</Button>
      </form>
      

      <div className="guideInput">
      <h2>Add Recipe guide</h2>
     
     
      <form >
        <div>
          <textarea 
            type="string"
            value={guide}
            onChange={({ target }) => setGuide(target.value)}
          />
        </div>
        <div>
        </div>
        {/* This button adds recipe*/}  
        <Button>Add recipe</Button>
      </form>
    </div>
    </div>
   

    
  );
};

export default connect(null,{
  RecipeForm
})(RecipeForm)

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

