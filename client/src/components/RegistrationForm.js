import React, { useState } from "react";
import registrationService from "../services/register";
import '../App.css';

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault()
    try {
      await registrationService.register({
        "username": username,
        "password": password
      });
      setUsername("");
      setPassword("");
    } catch (exception) {
      console.log('invalid username or password')
    }
  };

  return (
    <div>
      <h2>Please Register</h2>
      <form onSubmit={handleRegister}>
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
        <button>Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
