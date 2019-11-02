// import servicer
import recipeService from "../services/recipes";

//Values of recipe
/*title: String,
category: String,
time:Number, Disabled for now
ingredient:[String],
instruction:String,
*/

const reducer = (state = null, action) => {
  switch (action.type) {
    case "ADD":
      return action.data;

    default:
      return state;
  }
};

export const createRecipe = (title, category, ingredient, instruction) => {
  return async dispatch => {
    const recipe = { title, category, ingredient, instruction };
    const newRecipe = await recipeService.create(recipe);

    dispatch({
      data: newRecipe,
      type: "ADD"
    });
  };
};
export default reducer
