import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import { create } from "jss";
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const jss = create({
  ...jssPreset(),
  // Define a custom insertion point that JSS will look for when injecting the styles into the DOM.
  insertionPoint: "jss-insertion-point",
});
ReactDOM.render(
  <StylesProvider jss={jss}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </StylesProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
