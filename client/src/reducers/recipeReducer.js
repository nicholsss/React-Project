// import servicer
import recipeService from "../services/recipes";

//Values of recipe
/*title: String,
category: String,
time:Number, Disabled for now
ingredient:[String],
instruction:String,
*/

const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return state.concat(action.data)

    default:
      return state;
  }
};

export const createRecipe = (title,  instruction) => {
  return async dispatch => {
    //console.log("reduxx", category)
    const recipe = { title, instruction };
    const newRecipe = await recipeService.create(recipe);

    dispatch({
      data: newRecipe,
      type: "ADD"
    });
  };
};
export default reducer
