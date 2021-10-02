import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Import the Home page component
import Home from "./pages/home.jsx";
import Test from "./pages/test.jsx";
import Login from "./pages/login.jsx";

// Import and apply CSS stylesheet
import "./styles/styles.scss";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" ><Home /></Route>
        <Route exact path="/login" ><Login /></Route>
        <Route exact path="/test" ><Test /></Route>
        <Route exact path="/test/:category" ><Test /></Route>
      </Switch>
    </Router>
  );
  // if (!location) return "Načítání....";
  // else if (location === "home") return <Home data={{ changeLocation }} />;
  // else if (location === "test")
  //   return <Test data={{ testCategory: "Metodologie", changeLocation }} />;
  // else return "Chyba";
};

export default App;
