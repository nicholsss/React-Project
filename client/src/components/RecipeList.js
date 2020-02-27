import React, { useState } from "react";
import "../App.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Menu, Container } from "semantic-ui-react";
const RecipeList = props => {
  const [category, setCategory] = useState("");

  const recipesToShow = category
    ? props.recipes.filter(recipe =>
        recipe.category.toUpperCase().includes(category.toUpperCase())
      )
    : props.recipes;

  return (
    <Container>
      <Card.Group>
        <h2>What kind of recipes u wanna see?</h2>

        <Menu fluid widths={5}>
          <Menu.Item onClick={() => setCategory("")}>All</Menu.Item>
          <Menu.Item onClick={() => setCategory("Meat")}>Meat</Menu.Item>
          <Menu.Item onClick={() => setCategory("Vegetarian")}>
            Vegetarian
          </Menu.Item>

          <Menu.Item onClick={() => setCategory("Soup")}>Soup</Menu.Item>

          <Menu.Item onClick={() => setCategory("Fish")}>Fish</Menu.Item>
        </Menu>

        {recipesToShow.map(recipe => (
          <Link key={recipe.id} to={`/recipes/${recipe.id}`}>
            <Card>
              <Card.Content>
                <Card.Header>{recipe.title}</Card.Header>
                <Card.Meta>
                  {recipe.category}
                  <br />
                </Card.Meta>
              </Card.Content>
            </Card>
          </Link>
        ))}
      </Card.Group>
    </Container>
  );
};

const MapStateToProps = state => {
  return {
    recipes: state.recipes
  };
};

export default connect(MapStateToProps)(RecipeList);
