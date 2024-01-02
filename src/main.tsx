// Dependencies
import React from "react";
import ReactDOM from "react-dom/client";

// Pages
import Home from "./components/interfaces/workspace/home.component.tsx";

// Styles
import GlobalStyle from "./styles/global";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>
);
