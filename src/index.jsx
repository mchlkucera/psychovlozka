import React from "react";
import ReactDOM from "react-dom";
import App from "./app.tsx";

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

// TODO
// custom user security token + store user id
// token expiration
// update Webflow styles
// ? test.js simplify format
// ? js dropdown lag
// přidat id první špatné odpovědi
// zobrazit špatnou odpověď ve final screen
// nahlášení špatné otázky
// indexování otázek nefunguje?
// fetch otazek

// Nastavení
// Propojení s prezentací
// Ukládání odpovědí uživatelů

// Propojení payments a uživatele?
