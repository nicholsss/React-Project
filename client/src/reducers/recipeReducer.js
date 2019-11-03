
import recipeService from "../services/recipes";

const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return state.concat(action.data)

    default:
      return state;
  }
};

export const createRecipe = (title,category,ingredients,instruction) => {
  console.log("reduxx", title)
  return async dispatch => {
    
    const recipe = { title, category,ingredients,instruction };
    console.log("whole recipe", recipe)
    const newRecipe = await recipeService.create(recipe)
    
    dispatch({
      data: newRecipe,
      type: "ADD"
    });
  };
};
export default reducer
