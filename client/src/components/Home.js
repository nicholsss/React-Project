import React from 'react'
import { connect } from "react-redux";

const Home = (props) => {
  return (
  <h1>Home</h1>
  )
}

const MapStateToProps = state => {
    return {
      recipes: state.recipes,
      user: state.user
    };
  };
  
export default connect(MapStateToProps)(Home)