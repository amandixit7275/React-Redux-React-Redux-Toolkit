import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE } from "../store/Actions";

export default function Cart() {
  const loginDet = useSelector((state) => state.lr.loginDet);
  const cart = useSelector((state) => state.pr.cart);
  const dispatch = useDispatch();

  function deleteHandler(index, price) {
    dispatch({ type: DELETE, payLoad: { index, price } });
  }
  return (
    <div className="customDiv">
      <h2>Cart Component</h2>

      <h3>{loginDet}</h3>
      <hr />
      <ul>
        {cart.map((product, index) => {
          return (
            <li key={index} onClick={() => deleteHandler(index, product.price)}>
              {product.pName}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
