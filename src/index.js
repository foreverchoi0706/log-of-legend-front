import React from "react";
import reactDom from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./reducers/rootReducer";


const store = createStore(rootReducer);

reactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(".root")
);
