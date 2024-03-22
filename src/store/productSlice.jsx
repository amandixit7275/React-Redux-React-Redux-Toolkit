import { createSlice } from "@reduxjs/toolkit";
const initialState = {
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
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    purchase: (state, action) => {
      state.cart = [...state.cart, action.payload];
      state.total = state.total + parseInt(action.payload.price);
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter(
        (i, index) => index != action.payload.index
      );
      state.total = state.total - action.payload.price;
    },
  },
});
// function ProductReducer(state = initData, action) {
//   if (action.type === actions.PURCHASE) {
//     return {
//       ...state,
//       cart: [...state.cart, action.payLoad],
//       total: state.total + parseInt(action.payLoad.price),
//     };
//   }
//   if (action.type === actions.DELETE) {
//     return {
//       ...state,
//       cart: state.cart.filter((_, index) => index != action.payLoad.index),
//       total: state.total - action.payLoad.price,
//     };
//   }

//   return state;
// }

//internally createSlice() uses createActions() & createReducers()
export const { purchase, deleteItem } = productSlice.actions;
export default productSlice.reducer;
