import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// import { combineReducers, createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// import ProductReducer from "./store/ProductReducer.jsx";
// import LoginReducer from "./store/loginSlice.jsx";
import productSlice from "./store/productSlice.jsx";
import loginSlice from "./store/loginSlice.jsx";

// const rootReducer = combineReducers({
//   pr: ProductReducer,
//   lr: LoginReducer,
// });
const store = configureStore({
  reducer: {
    pr: productSlice,
    lr: loginSlice,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
