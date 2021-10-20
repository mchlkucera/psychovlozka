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
import homeDemo from "./pages/homeDemo.jsx";
import Navod from "./pages/navod.jsx";
import StudyBuddy from "./pages/study-buddy.jsx";
import VsechnyOtazky from "./pages/vsechny-otazky.jsx";
import Test from "./pages/test.jsx";
import Page404 from "./pages/page404.jsx";
import Feedback from "./components/Feedback";
import { Registrace, Login } from "./pages/loginPages";

const App = () => {
   // const [validated, setValidated] = useState(0);
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

   const setLogged = (user) => {
      if (user)
         setToken({ token: user.token, userId: user.id, state: user.state });
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
      if (pwd !== pwdAgain) {
         showFeedback("wrong", "Zadej stejná hesla, troubero");
         return true;
      }

      return await axios
         .post(`${apiLink}/users`, { email, password: pwd })
         .then((data) => {
            const {
               data: { body: user },
            } = data;
            delete user.password;
            showFeedback("correct", "Vítej v Psychovložce!");
            setLogged(user);
         })
         .catch((error) => {
            console.log(error);
            const msg = error.response?.data.message;
            showFeedback("wrong", msg ? msg : "Nedaří se připojit");
         });
   };

   const handleLogin = async ({ email, pwd }) => {
      return await axios
         .post(`${apiLink}/login`, { email, password: pwd })
         .then(({ data: { userData } }) => {
            showFeedback("correct", "Vítej v Psychovložce!");
            setLogged(userData);
         })
         .catch((error) => {
            console.log(error);
            const msg = error.response?.data.message;
            showFeedback("wrong", msg ? msg : "Nedaří se připojit");
         });
   };

   // useEffect(async () => {
   // if (logged) {
   //    console.log({
   //       logged,
   //       message: `Checking if the token is valid for user id ${logged.userId}`,
   //    });
   //    await axios
   //       .get(`${apiLink}/usr/${logged.userId}`)
   //       .then(({ data }) => {
   //          if (data.sessionId === logged.token) {
   //             setValidated(2);
   //             console.log({ yup: `${data.sessionId} == ${logged.token}` });
   //          } else setValidated(1);
   //       })
   //       .catch((error) => {
   //          console.log(error);
   //          window.localStorage.clear();
   //          location.reload();
   //       });
   // } else {
   //    console.log({ message: `The logged state is ${logged}!` });
   // }
   // }, []);
   // if (validated === 0) {
   //    return <h1>Načítám...</h1>;
   // }
   // if (validated === 1) {
   //    return (
   //       <Router>
   //          <Redirect to="/login" />
   //       </Router>
   //    );
   // }

   console.log(logged);

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
   // Routing for non-logged user
   else if (logged.state === "registered")
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
               <Route exact path="/" component={homeDemo} />
               <Route exact path="/navod" component={Navod} />

               <Route path="/registrace">
                  <Redirect to="/" />
               </Route>
               <Route path="/login">
                  <Redirect to="/" />
               </Route>

               {/* Blocked routes */}
               <Route
                  render={({ location: { pathname } }) =>
                     ["/", "/study-buddy", "/vsechny-otazky", "/test"].includes(
                        pathname
                     ) ? (
                        <Redirect to="/registrace" />
                     ) : (
                        <Page404 />
                     )
                  }
               />
            </Switch>
            <Footer />
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
