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
import "./App.css";
const App = (props) => {

  useEffect(() => {
    props.initializeUsers();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    props.initializeRecipes();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    props.initializeLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const recipeById = (id) => 
    props.recipes.find(recipe => recipe.id === id);
  //const userById = id => props.users.find(u => u.id ===id)

  

  if (props.user === null) {


    return (


      <Container>
        <Router>
          <Header>
            <div>
              <Link  to="/">
                Home
              </Link>
            </div>
            <div>
              <Link to="/recipes"> All recipes </Link>
            </div>
            <Nest>
            <div>
              <Link  to="/login">
                Login 
              </Link>
            </div>
            <div>
              <Link to="/register">
                Register
              </Link>
            </div>
            </Nest>
          </Header>
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
        <Header>
          <div>
            <Link  to="/">
              Home
            </Link>
          </div>

          <div>
            <Link to="/recipeForm"> Add recipe </Link>
          </div>

          <div>
            <Link to="/recipes"> All recipes </Link>
          </div>

          <div>
            <Link to="/myRecipes">my recipes</Link>
          </div>

          <div>
            <button  onClick={props.logout}>
              logout
            </button>
          </div>
        </Header>
        
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

/*const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
*/
const Container = styled.div`
display:flex;
background-color: #D6E9FE;
flex-wrap:wrap;
justify-content:center;
align-items:center;
`
const Header = styled.div`
justify-content: space-between;
display:flex;
width:100%;
height:100px;
background-color: red;
flex-wrap:wrap;
padding: 5px 5px 5px 5px;
`
const Nest = styled.div`
display:flex;
`