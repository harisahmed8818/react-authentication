import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider1 } from "./context1/UserContext1";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider1>
        <App />
      </UserProvider1>
    </BrowserRouter>
  </React.StrictMode>
);
