import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Root from "./containers/root";
import { Hidden } from "@material-ui/core";
import MobileRoot from "./containers/root/mobileRoot";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#1965fd",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
  // overrides: {
  //   MuiCssBaseline: {
  //     "@global": {
  //       "@font-face": [raleway],
  //     },
  //   },
  // },
});
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Hidden smDown>
          <Root />
        </Hidden>
        <Hidden mdUp>
          <MobileRoot />
        </Hidden>
      </ThemeProvider>
    </div>
  );
}

export default App;
