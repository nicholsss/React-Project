import recipeService from "../services/recipes";

const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return state.concat(action.data);
    case "INITIALIZE":
      return action.data; 
    case"REMOVE":
      return state
      .filter(a => a.id !== action.data.id)
    case 'LIKE':
      return state
      .map(a => a.id !== action.data.id ? a : action.data)
    case 'COMMENT':
      return state
      .map(a => a.id !== action.data.id ? a : action.data)
    default:
      return state;
  }
};

export const createRecipe = (recipe) => {
  //console.log("reduxx", title);
  return async dispatch => {
    //const recipe = { title, category, ingredients, instruction };
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
      data: recipe,
      type: 'REMOVE'
    })
  }
}
export const likeRecipe = (recipe) => {
  return async dispatch => {
    console.log("likerecipe")
    const liked = { ...recipe, likes:recipe.likes +1}
    const data = await recipeService.update(liked)
    dispatch({
      data,
      type:'LIKE'
    })
  }
}
export const commentRecipe = (recipe, value) => {
  return async (dispatch) => {
    const comment = { content: value }
    const addedComment = await recipeService.comment(recipe.id, comment)
    const commentedRecipe = { ...recipe, comments: recipe.comments.concat(addedComment) }
    dispatch({
      data: commentedRecipe,
      type: 'COMMENT'
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
