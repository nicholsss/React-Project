import loginService from "../services/login";

const reducer = (state = null, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.data;

    case "LOGOUT":
      return action.data;

    case "SET_USER":
      return action.data;

    default:
      return state;
  }
};

export const loginUser = (username, password) => {
  return async dispatch => {
    const user = await loginService.login(username, password);
    window.localStorage.setItem("loggedUser", JSON.stringify(user));
    dispatch({
      data: user,
      type: "LOGIN"
    });
  };
};
export const logout = () => {
  return async dispatch => {
    dispatch({
      data: null,
      type: "LOGOUT"
    });
  };
};
export const initializeLogin = () => {
  return async dispatch => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      dispatch({
        data: user,
        type: "INITLOGIN"
      });
    }
  };
};

export default reducer;
