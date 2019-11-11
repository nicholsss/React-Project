import recipeService from "../services/recipes";

const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return state.concat(action.data);

    case "INITIALIZE":
      return action.data;
      
      case"REMOVE":
      return state.filter(a => a.id !== action.data.id)

    default:
      return state;
  }
};

export const createRecipe = (title, category, ingredients, instruction) => {
  console.log("reduxx", title);
  return async dispatch => {
    const recipe = { title, category, ingredients, instruction };
    console.log("whole recipe", recipe);
    const newRecipe = await recipeService.create(recipe);

    dispatch({
      data: newRecipe,
      type: "ADD"
    });
  };
};
export const removeRecipe = recipe => {
  return async dispatch => {
    console.log("object", recipe)
    await recipeService.remove(recipe)

    dispatch({
      data:recipe,
      type:'REMOVE'
    })
  }
}

export const initializeRecipes = () => {
  return async dispatch => {
    const data = await recipeService.getAll();

    dispatch({
      data,
      type: "INITIALIZE"
    });
  };
};
export default reducer;
