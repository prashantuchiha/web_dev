// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
import React from "react"
import ReactDom from "react-dom"

ReactDom.render(
  <div>
  <h1>Hello World</h1>
  <ul>
    <li>Milk</li>
    <li>Ghee</li>
    <li>Grapes</li>
  </ul>
  </div>
,
document.getElementById("root")
);
