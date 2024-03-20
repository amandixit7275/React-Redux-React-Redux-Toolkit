import { createStore } from "redux";

const initData = {
  products: [
    {
      pName: "Apple",
      price: 20,
    },
    {
      pName: "Oranges",
      price: 23,
    },
    {
      pName: "Banana",
      price: 25,
    },
    {
      pName: "Grapes",
      price: 30,
    },
    {
      pName: "Mango",
      price: 35,
    },
  ],
  cart: [],
  total: 0,
};

function reducer(state = initData, action) {
  if (action.type === "PURCHASE") {
    return {
      ...state,
      cart: [...state.cart, action.payLoad],
      total: state.total + parseInt(action.payLoad.price),
    };
  }
  if (action.type === "DELETE") {
    return {
      ...state,
      cart: state.cart.filter((_, index) => index != action.payLoad.index),
      total: state.total - action.payLoad.price,
    };
  }
  return state;
  //
}
const store = createStore(reducer);

export default store;
