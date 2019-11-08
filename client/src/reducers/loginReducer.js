import loginService from "../services/login";
import recipeService from '../services/recipes'

const reducer = (state = null, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.data;

    case "LOGOUT":
      return null;

    case "INITLOGIN":
      return action.data;

    default:
      return state;
  }
};

export const loginUser = (username, password) => {
  return async dispatch => {
    const user = await loginService.login(username, password);
    window.localStorage.setItem("loggedUser", JSON.stringify(user));
    console.log("tokeni",user.token)
    console.log("user name",username)
    recipeService.setToken(user.token)
    recipeService.getAll("loggedUser")
    dispatch({
      data: user,
      type: "LOGIN"
    });
  };
};
export const logout = () => {
  window.localStorage.removeItem("loggedUser");
  recipeService.destroyToken()
  return { type: "LOGOUT" };
};
export const initializeLogin = () => {
  return async dispatch => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      await recipeService.setToken(user.token)
      dispatch({
        data: user,
        type: "INITLOGIN"
      });
    }
  };
};

export default reducer;
