import React, { useState } from "react";
import "../App.css";
import styled from "styled-components";
import { connect } from "react-redux";
import { loginUser, setUser } from "../reducers/loginReducer";
//TÄÄ KOKO KOMPONENTTI TÄYSIN KESKEN JA IHAN SEKASIN
const LoginForm = props => {
  const [category, setCategory] = useState("");
  
    console.log(category)

  return (
    <div>
      <h2>What kind recipes u wanna see?</h2>
      {/* Nämä mielellään allekkain 2 riveissä */}
    <Button onClick={() => setCategory("Meat")} >Meat</Button>
    <Button onClick={() => setCategory("Vegetarian")}>Vegetarian</Button>
    <Button onClick={() => setCategory("Soup")}>Soup</Button>
    <Button onClick={() => setCategory("Fish")}>Fish</Button>
      
    </div>
  );
};

export default connect(
  null,
  {
    loginUser
  }
)(LoginForm);

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
