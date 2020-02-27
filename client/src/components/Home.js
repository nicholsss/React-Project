import React from 'react'
import { connect } from "react-redux";
import Notification from './Notification'
const Home = (props) => {
  return (
    <div>
      <Notification />
      
      <h1>Store your recipes, and search for other people recipes</h1>
      <img src={ require('../assets/kitchen.svg') } alt="made by @realvjy" />
      
    </div>
  )
}

const MapStateToProps = state => {
    return {
      recipes: state.recipes,
      user: state.user
    };
  };
  
export default connect(MapStateToProps)(Home)