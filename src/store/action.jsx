import { userLogin } from "./loginSlice";
export const LOGIN = "LOGIN";
export const DELETE = "DELETE";
export const PURCHASE = "PURCHASE";

export const validateUser = (loginDet) => {
  return (dispatch) => {
    //API call fetching user & then validate
    setTimeout(() => {
      //   dispatch({ type: "PURCHASE", loginDet: loginDet });
      dispatch(userLogin(loginDet));
    }, 2000);
  };
};
