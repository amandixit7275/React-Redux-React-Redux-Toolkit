import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN } from "../store/Actions";

export default function Login() {
  const users = useSelector((state) => state.lr.users);
  const dispatch = useDispatch();

  function loginHandler(event) {
    const user = event.target.options[event.target.selectedIndex].text;
    dispatch({ type: LOGIN, user: user });
  }
  return (
    <div className="customDiv">
      <h2>Login</h2>

      <hr />
      <select onChange={(e) => loginHandler(e)} name="" id="">
        {users.map((user, index) => {
          return (
            <option key={index} value="">
              {user}
            </option>
          );
        })}
      </select>
    </div>
  );
}
