import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";
import Recipe from "./components/Recipe";
import MyRecipeList from "./components/MyRecipeList";
import Home from "./components/Home";
import { connect } from "react-redux";

import { initializeLogin, logout } from "./reducers/loginReducer";
import { initializeRecipes } from "./reducers/recipeReducer";
import { initializeUsers } from "./reducers/userReducer";

import { Container, Menu } from "semantic-ui-react";

const App = props => {
  useEffect(() => {
    props.initializeUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    props.initializeRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    props.initializeLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const recipeById = id => props.recipes.find(recipe => recipe.id === id);

  const padding = { padding: 5 };

  if (props.user === null) {
    return (
      <Container>
        <Router>
          <Menu fluid widths={4}>
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
            render={({ match }) => (
              <Recipe recipe={recipeById(match.params.id)} />
            )}
          />
        </Router>
      </Container>
    );
  }

  return (
    <Container>
      <Router>
        <Menu fluid widths={5}>
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
            <Link to="/" onClick={props.logout}>
              logout
            </Link>
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
          render={({ match }) => (
            <Recipe recipe={recipeById(match.params.id)} />
          )}
        />
      </Router>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users,
    user: state.user,
    recipes: state.recipes
  };
};
const mapDispatchToProps = {
  initializeLogin,
  logout,
  initializeRecipes,
  initializeUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
