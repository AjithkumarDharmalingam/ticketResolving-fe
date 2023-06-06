
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
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
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

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

const persistConfig = {
  key: "root",
  version: 1,
  storage
};

const reducer = combineReducers({
  pagestate: pagestate,
  user: user,
  query: query
});

const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: persistedReducer
});
let persistor = persistStore(store);
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();