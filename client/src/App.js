import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";
import Recipe from './components/Recipe'
import { connect } from "react-redux";
import styled from "styled-components";
import { initializeLogin, logout } from "./reducers/loginReducer";
import { initializeRecipes } from "./reducers/recipeReducer";

const App = props => {
  useEffect(() => {
    props.initializeLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    props.initializeRecipes();
  }, []);
  const recipeById = id => props.recipes.find(r => r.id === id)
  
  console.log("taa on yks resepti",props.recipes)
  const padding = { padding: 5 };
console.log(props)

  if (props.user === null) {
    return (
      <div className="App">
       
        <Router>
          <div>
            <Link style={padding} to="/">
              Home
            </Link>
            <Link style={padding} to="/login">
              Login
            </Link>
            <Link style={padding} to="/register">
              Register
            </Link>
          </div>
          <div>
            <Route exact path="/login" render={() => <LoginForm />} />
            <Route exact path="/register" render={() => <RegistrationForm />} />
          </div>
          <h1>Homepage has buttons to filter food category</h1>
        </Router>
      </div>
    );
  }
  return (
    <div className="App">
     
      <Router>
        <div>
        
          <Link style={padding} to="/">
            Home
          </Link>
          <Link to="/recipeForm"> Add recipe </Link>
          <Link to='/allRecipes'> All recipes</Link>
        </div>
        <div>
          <Route exact path="/recipeForm" render={() => <RecipeForm />} />
        </div>
        <div>
        <Route exact path="/allRecipes" render={() => <RecipeList />} />
        </div>

        <Route exact path='/recipes/:id'
        render={({ match }) => <Recipe recipe ={recipeById(match.params.id)}/>}
        />
        <Button color="pink" onClick={props.logout}>
          logout
        </Button>
      </Router>
    </div>
  );
};

const mapStateToProps = state => {
  return { user: state.user, recipes: state.recipes };
};
const mapDispatchToProps = {
  initializeLogin,
  logout,
  initializeRecipes
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
