import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { DarkModeContextProvider } from "./components/Context/DarkModeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DarkModeContextProvider>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </DarkModeContextProvider>
);
