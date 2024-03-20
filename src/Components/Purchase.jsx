import React from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";

export default function Purchase() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  console.log(products);

  function handleChange(event) {
    const pName = event.target.options[event.target.selectedIndex].text;
    const price = event.target.value;
    const obj = { pName, price };
    dispatch({ type: "PURCHASE", payLoad: obj });
  }

  return (
    <div className="customDiv">
      <h2>Purchase Component</h2>
      <hr />
      <select onChange={(e) => handleChange(e)}>
        {products.map((product, index) => {
          return (
            <option value={product.price} key={index}>
              {product.pName} : {product.price}
            </option>
          );
        })}
      </select>
    </div>
  );
}
