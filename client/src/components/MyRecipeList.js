import React, { useState } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

export const MyRecipeList = props => {
  if (props.user === undefined) {
    return null;
  }

  console.log("userin tiedot myrecipes", props.user);
  return (
    <div>
      <h1>OK</h1>
    </div>
  );
};

export default connect(MyRecipeList);
