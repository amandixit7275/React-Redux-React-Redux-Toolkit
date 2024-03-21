import { LOGIN } from "./Actions";

const initData = {
  users: ["Customer", "Manager", "Engineer", "Admin"],
  loginDet: "none",
};

function LoginReducer(state = initData, action) {
  if (action.type === LOGIN) {
    return {
      ...state,
      loginDet: action.user,
    };
  }
  return state;
}

export default LoginReducer;
