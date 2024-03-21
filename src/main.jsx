import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { combineReducers, createStore } from "redux";

import { Provider } from "react-redux";
import ProductReducer from "./store/ProductReducer.jsx";
import LoginReducer from "./store/LoginReducer.jsx";

const rootReducer = combineReducers({
  pr: ProductReducer,
  lr: LoginReducer,
});
const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
