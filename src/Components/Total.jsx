import React from "react";
import { useSelector } from "react-redux";

export default function Total() {
  const total = useSelector((state) => state.total);

  return (
    <div className="customDiv">
      <h3>Total : </h3>
      {total}
    </div>
  );
}
