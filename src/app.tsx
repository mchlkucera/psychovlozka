import React, { useState } from "react";
import axios from "axios";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from "react-router-dom";

// Css, data
import "./styles/testStyle.scss";
import { apiLink } from "./data";

// Components
import Footer from "./components/Footer.jsx";
import Nav from "./components/Nav.jsx";
import useToken from "./components/useToken";

// Import pages
import Home from "./pages/home.jsx";
import Navod from "./pages/navod.jsx";
import StudyBuddy from "./pages/study-buddy.jsx";
import VsechnyOtazky from "./pages/vsechny-otazky.jsx";
import Test from "./pages/test.jsx";
import Page404 from "./pages/page404.jsx";
import Feedback from "./components/Feedback";
import { Registrace, Login } from "./pages/loginPages";

const App = () => {
   // Feedback logic
   const [feedbackList, setFeedbackList] = useState([]);
   const showFeedback = (type, message) => {
      const feedback = {
         type,
         id: feedbackList.length + 1,
         customText: message,
      };
      setFeedbackList([...feedbackList, feedback]);
   };

   // Login system
   const { token: logged, setToken } = useToken();
   const setLogged = (userId) => {
      if (userId) setToken({ token: 666, userId: userId });
      else {
         window.localStorage.clear();
         location.reload();
      }
   };

   const signOut = () => {
      alert("Byl jsi úspěšně odhlášen");
      setLogged(false);
      return <Redirect to="/" />;
   };

   const handleRegistration = async ({ email, pwd, pwdAgain }) => {
      console.log({ pwd, pwdAgain, email });
      if (pwd !== pwdAgain) {
         showFeedback("wrong", "Zadej stejná hesla, troubero");
         return true;
      }

      return await axios
         .post(`${apiLink}/users`, { email, password: pwd })
         .then((data) => {
            showFeedback("correct", "Vítej v Psychovložce!");
            setLogged(true);
         })
         .catch((error) => {
            return (
               showFeedback("wrong", error.response.data.message),
               console.log(error)
            );
         });
   };

   const handleLogin = async ({ email, pwd }) => {
      return await axios
         .post(`${apiLink}/login`, { email, password: pwd })
         .then(({ data }) => {
            showFeedback("correct", "Vítej v Psychovložce!");
            const { userId } = data;
            setLogged(userId);
         })
         .catch((error) => {
            return (
               showFeedback("wrong", error.response.data.message),
               console.log(error)
            );
         });
   };

   // Routing for non-logged user
   if (!logged)
      return (
         <Router>
            <Switch>
               <Route path="/registrace">
                  <Registrace data={{ handleRegistration }} />
               </Route>
               <Route path="/login">
                  <Login data={{ handleLogin }} />
               </Route>
               <Route
                  render={({ location: { pathname } }) =>
                     [
                        "/",
                        "/navod",
                        "/study-buddy",
                        "/vsechny-otazky",
                        "/test",
                     ].includes(pathname) ? (
                        <Redirect to="/registrace" />
                     ) : (
                        <Page404 />
                     )
                  }
               />
            </Switch>
            <Feedback feedbackList={feedbackList} mainpage={true} />
         </Router>
      );
   // Logged user
   else
      return (
         <Router>
            <Route
               render={({ location: { pathname } }) =>
                  pathname.includes("test") || !logged ? null : (
                     <Nav signOut={signOut} />
                  )
               }
            />
            <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/navod" component={Navod} />
               <Route exact path="/study-buddy" component={StudyBuddy} />
               <Route exact path="/vsechny-otazky" component={VsechnyOtazky} />

               <Route exact path="/test" component={Test} />
               <Route exact path="/test/:category" component={Test} />

               <Route path="/registrace">
                  <Redirect to="/" />
               </Route>
               <Route path="/login">
                  <Redirect to="/" />
               </Route>
               <Route path="*" component={Page404} />
            </Switch>
            <Footer />
            <Feedback feedbackList={feedbackList} mainpage={true} />
         </Router>
      );
};

export default App;
