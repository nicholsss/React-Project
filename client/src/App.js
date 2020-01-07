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
import Home from "./components/Home";
import { connect } from "react-redux";
import styled from "styled-components";
import { initializeLogin, logout } from "./reducers/loginReducer";
import { initializeRecipes } from "./reducers/recipeReducer";
import { initializeUsers } from "./reducers/userReducer";

import { Container, Button, Menu } from "semantic-ui-react";

const App = (props) => {

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

  const recipeById = (id) => 
    props.recipes.find(recipe => recipe.id === id);
  //const userById = id => props.users.find(u => u.id ===id)

  const padding = { padding: 5 };

  if (props.user === null) {
    return (
      <Container>
        <Router>
          <Menu>
            <Menu.Item>
              <Link style={padding} to="/">
                Home
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/recipes"> All recipes </Link>
            </Menu.Item>
            <Menu.Item>
              <Link style={padding} to="/login">
                Login
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link style={padding} to="/register">
                Register
              </Link>
            </Menu.Item>
          </Menu>
          <div>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/login" render={() => <LoginForm />} />
            <Route exact path="/register" render={() => <RegistrationForm />} />
            <Route exact path="/recipes" render={() => <RecipeList />} />
          </div>

          <Route
          exact
          path="/recipes/:id"
          render={({ match }) => 
            <Recipe recipe={recipeById(match.params.id)} />}
        />

        </Router>
      </Container>
    );
  }
  //const userById = username => props.users.find(u => u.username === username);
  
  return (
   
    <Container >
      <Router>
        <Menu>
          <Menu.Item>
            <Link style={padding} to="/">
              Home
            </Link>
          </Menu.Item>

          <Menu.Item>
            <Link to="/recipeForm"> Add recipe </Link>
          </Menu.Item>

          <Menu.Item>
            <Link to="/recipes"> All recipes </Link>
          </Menu.Item>

          <Menu.Item>
            <Link to="/myRecipes">my recipes</Link>
          </Menu.Item>

          <Menu.Item>
            <Button  onClick={props.logout}>
              logout
            </Button>
          </Menu.Item>
        </Menu>
        
        <div>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/recipeForm" render={() => <RecipeForm />} />
          <Route exact path="/recipes" render={() => <RecipeList />} />
          <Route exact path="/myRecipes" render={() => <MyRecipeList />} />
        </div>

        <Route
          exact
          path="/recipes/:id"
          render={({ match }) => 
            <Recipe recipe={recipeById(match.params.id)} />}
        />
        
        
       </Router>
    </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);

/*const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
*/
