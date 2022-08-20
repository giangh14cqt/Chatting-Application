import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { ScreenStatusProvider } from "./store/ScreenStatusContex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ScreenStatusProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ScreenStatusProvider>
);
