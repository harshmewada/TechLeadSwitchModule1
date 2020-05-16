import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Root from "./containers/root";
import { Hidden } from "@material-ui/core";
import MobileRoot from "./containers/root/mobileRoot";

function App() {
  return (
    <div className="App">
      <Hidden smDown>
        <Root />
      </Hidden>
      <Hidden mdUp>
        <MobileRoot />
      </Hidden>
    </div>
  );
}

export default App;
