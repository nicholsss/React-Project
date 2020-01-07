import React, { useState } from "react";
import "../App.css";
import styled from "styled-components";
import { connect } from "react-redux";
import {removeRecipe, likeRecipe, commentRecipe } from "../reducers/recipeReducer";
import { useField } from '../hooks'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import { Divider, Grid, Image, Segment } from 'semantic-ui-react'
// <button onClick={() => remove(props.recipe)}>Delete</button>
//Tää komponentti näyttää klikatun reseptin tiedot
const Recipe = props => {
  const[comment, commentReset] = useField('text')
  console.log("rseptii", props.recipe)
  if (props.recipe === undefined) {
    return null;
  }

  const creator = () => {
    console.log("lol", props.recipe.user)
    if (props.user) {
      return props.recipe.user.username === props.user.username
    } else {
      return false
    }
  }

  const handleComment = async (event) => {
    console.log("comment")
    event.preventDefault()
    props.commentRecipe(props.recipe, comment.value)
    commentReset()
  }

  const like = async (recipe) => {
    const ok = window.confirm("Are u sure?")
    if(ok){
      props.likeRecipe(recipe)
    }
  }

  const remove = async (recipe) => {
    const ok = window.confirm("Are u sure?")
    if(ok){
      props.removeRecipe(recipe).then(() => props.history.push('/myRecipes'))
    }
  }
  
  return (
    <Segment>
      <Grid columns={2} relaxed='very'>
        <Grid.Column>
      <p>Made by {props.recipe.user.username}</p>
      <h1>{props.recipe.title}</h1>
      <em><p>{props.recipe.category}</p></em>
      <br/>
      <p>likes {props.recipe.likes}</p>
      {props.recipe.ingredient.map(i => (
        <li key={i}>{i}</li>
      ))}
      </Grid.Column>
      <Grid.Column>
        
      <p>{props.recipe.instruction}</p>
      
      {creator() && (<button onClick ={() => remove(props.recipe)}>remove</button>)}
      
      {props.user && (<button onClick ={() => like(props.recipe)}>Like</button>)}

      </Grid.Column>
      
      <Grid.Column>
      <form onSubmit={handleComment}>
      <div>
        <input {...comment} /> <button type='submit'>add comment</button>
      </div>
      </form>
      <li>
        {props.recipe.comments.map(comment => (
          <ul key={comment.id}>{comment.content}</ul>
        ))}
      </li>
      </Grid.Column>
      </Grid>

      

      <Divider vertical>Instruction</Divider>


    </Segment>
    
    
  );
};

const MapStateToProps = state => {
  return {
    recipes: state.recipes,
    user: state.user
  };
};

const mapDispatchToProps ={
  removeRecipe,
  likeRecipe,
  commentRecipe
}


export default connect(MapStateToProps,mapDispatchToProps)(withRouter(Recipe));
