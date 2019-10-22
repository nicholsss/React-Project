import React, { useState } from "react";
import '../App.css';
import loginService from '../services/login'
import styled from 'styled-components'
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  
const handleLogin = async event => {
  event.preventDefault()
  try{
    await loginService.login({
      'username':username,
      'password':password
    })
    setUsername("");
      setPassword("");
      console.log("loggin succes")
  }catch(expection){
    console.log('Login failed')
  }
  
}

  return (
    <div>
      <h2>Please Login</h2>
     
     
      <form onSubmit={handleLogin}>
        <div>
          username
          <input
            type="string"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
          <input
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <Button>Login</Button>
      </form>
    </div>
  );
};

export default LoginForm;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`
