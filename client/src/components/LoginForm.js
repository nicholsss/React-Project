import React, { useState } from "react";
import '../App.css';

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div>
      <h2>Please Login</h2>
     
     
      <form onSubmit>
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

export default LoginForm;
