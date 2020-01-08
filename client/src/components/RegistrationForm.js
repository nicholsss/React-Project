import React, { useState } from "react";
import registrationService from "../services/register";
import "../App.css";
const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const notify = (message, color ='succes') => {
    props.setNotification({message, color}, 10)
  }
  
  const handleRegister = async event => {
    event.preventDefault();
    try {
      await registrationService.register({
        username: username,
        password: password
      })
      .then(() => props.history.push('/login'))
      .then(() => notify(`${username} registered! Please log in!`))
      setUsername("");
      setPassword("");
      console.log("register succes");
    } catch (exception) {
      console.log("invalid username or password");
      notify("invalid username or password", "error")
    }
  };
  

  return (
    <div>
      <h2>Please Register</h2>

      <form onSubmit={handleRegister}>
        
       <div>
          <input
            placeholder="username"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
       </div>
       <div>
          
          <input
          placeholder="password"
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

export default connect(null, {setNotification})
(withRouter(RegistrationForm));
