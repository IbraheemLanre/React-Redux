import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import counterreducer from "./reducers/counterreducer";
import resultreducer from "./reducers/resultreducer";

const rootReducer = combineReducers({
  ctrRed: counterreducer,
  resRed: resultreducer,
});
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
