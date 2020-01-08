import React, { useState } from "react";
import "../App.css";
import styled from "styled-components";
import { connect } from "react-redux";
import { loginUser } from "../reducers/loginReducer";
import { setNotification } from '../reducers/notificationReducer'
import Notification from './Notification'
import { withRouter } from "react-router-dom";

const LoginForm = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const notify = (message, color ='succes') => {
    props.setNotification({message, color}, 2)
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    props.loginUser({
      username: username,
      password: password
    }).then(() => notify(`${username} logged in!`))
    .then(() => props.history.push('/')
    ).catch(() => {
      notify('wrong username or password', 'error')
    })
    setUsername("");
    setPassword("");
  }

  return (
    <div>
      
      <h2>Please Login</h2>
      <Notification />
      <form onSubmit={handleLogin}>
       
          <input
            placeholder="username"
           
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
       
       
          
          <input
           placeholder="password"
           
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
       
        <button>Login</button>
      </form>
    </div>
  );
};

export default connect(null, {
  loginUser, setNotification
})(withRouter(LoginForm));

/*const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
*/
