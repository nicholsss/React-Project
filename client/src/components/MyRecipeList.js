import React, { useState } from "react";
import "../App.css";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { Card, Menu } from "semantic-ui-react";

const MyRecipeList = props => {
  const [category, setCategory] = useState("");

  console.log("user", props.user);
  props.recipes.map(recipe => console.log("reseipti", recipe.user));

  const recipesToShow = category
    ? props.user &&
      props.recipes.filter(
        recipe =>
          recipe.user.username === props.user.username &&
          recipe.category.toUpperCase().includes(category.toUpperCase())
      )
    : props.user &&
      props.recipes.filter(
        recipe => recipe.user.username === props.user.username
      );

  return (
    <Card.Group>
      <h2>What kind of recipes you want to see?</h2>

      <Menu fluid widths={5}>
        <Menu.Item onClick={() => setCategory("")}>All</Menu.Item>
        <Menu.Item onClick={() => setCategory("Meat")}>Meat</Menu.Item>
        <Menu.Item onClick={() => setCategory("Vegetarian")}>
          Vegetarian
        </Menu.Item>

        <Menu.Item onClick={() => setCategory("Soup")}>Soup</Menu.Item>

        <Menu.Item onClick={() => setCategory("Fish")}>Fish</Menu.Item>
      </Menu>

      {recipesToShow &&
        recipesToShow.map(recipe => (
          <Link key={recipe.id} to={`/recipes/${recipe.id}`}>
            <Card>
              <Card.Content>
                <Card.Header>{recipe.title}</Card.Header>
                <Card.Meta>{recipe.category}</Card.Meta>
              </Card.Content>
            </Card>
          </Link>
        ))}
    </Card.Group>
  );
};

const MapStateToProps = state => {
  return {
    recipes: state.recipes,
    user: state.user,
    users: state.users
  };
};

export default connect(MapStateToProps)(MyRecipeList);
