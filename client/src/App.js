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
import Recipe from "./components/Recipe";
import MyRecipeList from "./components/MyRecipeList";
import { connect } from "react-redux";
import styled from "styled-components";
import { initializeLogin, logout } from "./reducers/loginReducer";
import { initializeRecipes } from "./reducers/recipeReducer";
import { initializeUsers } from "./reducers/userReducer";

import { Container } from 'semantic-ui-react'

const App = props => {
  useEffect(() => {
    props.initializeUsers();
  }, []);
  useEffect(() => {
    props.initializeRecipes();
  }, []);

  useEffect(() => {
    props.initializeLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const recipeById = id => props.recipes.find(r => r.id === id);
  //const userById = id => props.users.find(u => u.id ===id)

  const padding = { padding: 5 };

  if (props.user === null) {
    return (
      <Container>
        <Router>
          <div>
            <Link style={padding} to="/">
              Home
            </Link>
            <Link to="/recipes"> All recipes </Link>
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
            
          <Route exact path="/recipes" render={() => <RecipeList />} />
       
          </div>
          <h1>Homepage has buttons to filter food category</h1>
        </Router>
      </Container>
    );
  }
  console.log("user", props.user.username)
  const userById = username => props.users.find(u => u.username ===username)
  console.log("users", props.users)
  return (
    <div className="App">

      <Router>
        <div>
          <Link style={padding} to="/">
            Home
          </Link>
          <Link to="/recipeForm"> Add recipe </Link>
          <Link to="/recipes"> All recipes </Link>

          <Link to="/myRecipes">my recipes</Link>
        </div>
        <div>
          <Route exact path="/recipeForm" render={() => <RecipeForm />} />
        </div>
        <div>
          <Route exact path="/recipes" render={() => <RecipeList />} />
        </div>

        <Route
          exact
          path="/recipes/:id"
          render={({ match }) => (
            <Recipe recipe={recipeById(match.params.id)} />
          )}
        />
        <Route
          exact
          path="/myRecipes"
          render={() => <MyRecipeList />}
        />
        <Button onClick={props.logout}>logout</Button>
      </Router>
    </div>
  );
};

const mapStateToProps = state => {
  return { users: state.users, user: state.user, recipes: state.recipes };
};
const mapDispatchToProps = {
  initializeLogin,
  logout,
  initializeRecipes,
  initializeUsers
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

