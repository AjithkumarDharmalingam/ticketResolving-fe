import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes
} from "@mui/material/styles";
import pagestate from "./components/Reducers/pagestate";
import user from "./components/Reducers/user";
import query from "./components/Reducers/query";

const root = ReactDOM.createRoot(document.getElementById("root"));
let theme = createTheme({
  palette: {
    background: {
      default: "#7e8e9f"
      //dark: "#000000"
    },
    primary: {
      light: "#495057", //color
      main: "#ffffff" //background
    },
    secondary: {
      light: "#ffffff", //color
      main: "#4b0dba" //background
    }
  }
});
theme = responsiveFontSizes(theme);
const store = configureStore({
  reducer: {
    pagestate: pagestate,
    user: user,
    query: query
  }
});
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
