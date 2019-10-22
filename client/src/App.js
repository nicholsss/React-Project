import React from 'react'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'

import RegistrationForm from './components/RegistrationForm'
import LoginForm from './components/LoginForm'

const App = (props) => {
  const padding = { padding: 5 }
  console.log(props)
  return (
    <div className="App">
      <Router>
        <div>
        <Link style={padding} to="/">Home</Link>
      <Link style={padding} to="/login">Login</Link>
      <Link style={padding} to="/register">Register</Link>
      </div>
      <div>
      <Route exact path="/login" render={() => <LoginForm />} />
      <Route exact path="/register" render={() => <RegistrationForm />} />
      </div>
      </Router>
      
      
    </div>
  );
}

export default App;
