import React from "react";
import ReactDOM from "react-dom";
import App from "./app.tsx";

import "./css/normalize.css";
import "./css/webflow.css";
import "./css/psychovlozka.webflow.css";

import "./js/webflow";

ReactDOM.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
   document.getElementById("root")
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://vitejs.dev/guide/api-hmr.html
if (import.meta.hot) {
   import.meta.hot.accept();
}
