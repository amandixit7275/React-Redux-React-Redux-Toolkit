import React from "react";
import { useSelector } from "react-redux";

export default function Total() {
  const loginDet = useSelector((state) => state.lr.loginDet);
  const total = useSelector((state) => state.pr.total);

  return (
    <div className="customDiv">
      <h2>Total</h2>
      <h3>{loginDet}</h3>
      <hr />

      {total}
    </div>
  );
}
