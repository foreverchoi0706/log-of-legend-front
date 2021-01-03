import React from "react";
import reactDom from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import Thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer, applyMiddleware(Thunk, logger));

reactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(".root")
);
