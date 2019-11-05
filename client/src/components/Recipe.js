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
//Tää komponentti näyttää klikatun reseptin tiedot
const Recipe = props => {
    console.log(props)
  return (
    <h1>Tänne reseptin tiedot</h1>
  );
};

const MapStateToProps = state => {
  return {
    recipes: state.recipes
  };
};

export default connect(MapStateToProps)(Recipe);


