import React from 'react'
import { connect } from "react-redux";
import Notification from './Notification'
const Home = (props) => {
  return (
    <div>
      <Notification />
      <h1>Home</h1>
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