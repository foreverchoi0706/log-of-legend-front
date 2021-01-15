import React from "react";
import reactDom from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";


import rootReducer, { rootSaga } from "./reducers/rootReducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

reactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(".root")
);
