import React, { useState } from "react";
import "../App.css";
import styled from "styled-components";
import { connect } from "react-redux";
import { loginUser, setUser } from "../reducers/loginReducer";

import { Form, Button } from "semantic-ui-react";

const LoginForm = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async event => {
    event.preventDefault();
    try {
      props.loginUser({
        username: username,
        password: password
      });
      setUsername("");
      setPassword("");
      console.log("loggin succes");
    } catch (expection) {
      console.log("Login failed");
    }
  };

  return (
    <div>
      <h2>Please Login</h2>

      <Form onSubmit={handleLogin}>
        <Form.Field>
          <input
            placeholder="username"
           
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </Form.Field>
        <Form.Field>
          
          <input
           placeholder="password"
           
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </Form.Field>
        <Button>Login</Button>
      </Form>
    </div>
  );
};

export default connect(null, {
  loginUser
})(LoginForm);

/*const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
*/
