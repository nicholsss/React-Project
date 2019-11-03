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
import { connect } from "react-redux";
import styled from "styled-components";
import { initializeLogin, logout } from "./reducers/loginReducer";

const App = props => {
  useEffect(() => {
    props.initializeLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const padding = { padding: 5 };

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
  console.log("useri", props.user.username);
  return (
    <div className="App">
      <Router>
        <div>
          <Link style={padding} to="/">
            Home
          </Link>
          <Link to="/recipes"> Add recipe</Link>
        </div>
        <div>
          <Route exact path="/recipes" render={() => <RecipeForm />} />
        </div>

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
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
