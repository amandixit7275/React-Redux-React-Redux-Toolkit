import { createSlice } from "@reduxjs/toolkit";
import { LOGIN } from "./action";

const initialState = {
  users: ["Customer", "Manager", "Engineer", "Admin"],
  loginDet: "none",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.loginDet = action.payload;
    },
  },
});

export const { userLogin } = loginSlice.actions;
export default loginSlice.reducer;

// function LoginReducer(state = initData, action) {
//   if (action.type === LOGIN) {
//     return {
//       ...state,
//       loginDet: action.user,
//     };
//   }
//   return state;
// }

// export default LoginReducer;
