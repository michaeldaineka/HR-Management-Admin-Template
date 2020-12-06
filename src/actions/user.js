export const USER_LOGIN = "user/login";
export const USER_LOGIN_REQUEST = "user/loginRequest";

const userLogin = () => ({ type: USER_LOGIN });

const userLoginRequest = () => ({ type: USER_LOGIN_REQUEST });

export const userLoginAsync = () => {
  return (dispatch) => {
    dispatch(userLoginRequest());
    setTimeout(() => {
      localStorage.setItem("isAuthenticated", true);
      dispatch(userLogin());
    }, 2000);
  };
};
