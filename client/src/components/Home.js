import React from 'react'
import { connect } from "react-redux";
import styled from "styled-components";
{/* https://konpa.github.io/devicon/*/}
//<img src={ require('../assets/kitchen.svg') } />
const Home = (props) => {
  return (
    <Container>
      
      
      


    

  </Container>
  )
}

const MapStateToProps = state => {
    return {
      recipes: state.recipes,
      user: state.user
    };
  };
  
export default connect(MapStateToProps)(Home)

const Container = styled.div`
display:flex;
width:100%;

`