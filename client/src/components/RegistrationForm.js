import React, { useState } from "react";
import registrationService from "../services/register";
import "../App.css";
import { Form, Button } from "semantic-ui-react";
const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async event => {
    event.preventDefault();
    try {
      await registrationService.register({
        username: username,
        password: password
      });
      setUsername("");
      setPassword("");
      console.log("register succes");
    } catch (exception) {
      console.log("invalid username or password");
    }
  };

  return (
    <div>
      <h2>Please Register</h2>

      <Form onSubmit={handleRegister}>
        
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
        <Button>Register</Button>
      </Form>
    </div>
  );
};

export default RegistrationForm;
