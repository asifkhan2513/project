import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import rootReducer from "./reducer";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { Toaster } from "react-hot-toast";

const store = configureStore({
  reducer: rootReducer,
});
createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <App />
      <Toaster />
    </Provider>
  </>
);
