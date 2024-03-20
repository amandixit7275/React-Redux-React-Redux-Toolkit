import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function deleteHandler(index, price) {
    dispatch({ type: "DELETE", payLoad: { index, price } });
  }
  return (
    <div className="customDiv">
      <h2>Cart Component</h2>
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
