import { USER_LOGIN, USER_LOGIN_REQUEST } from "actions/user";

const appReducer = (
  state = {
    isAuthenticated: !!localStorage.getItem("isAuthenticated"),
    isFetching: false,
  },
  action
) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        isFetching: false,
      };
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    default:
      return state;
  }
};

export default appReducer;
