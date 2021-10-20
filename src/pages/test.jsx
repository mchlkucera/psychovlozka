import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { locations, textsLength, apiLink } from "../data.js";

// Import components
import Question from "../components/Question.jsx";
import Progress from "../components/Progress.jsx";
import Feedback from "../components/Feedback.jsx";
import Finished from "../components/Finished.jsx";

const Test = () => {
   // Settings
   //const questionCount = 15;
   const questionCount = 2;

   // Get category from slug
   const linkCategory = useParams().category;
   const testCategory = linkCategory
      ? locations.find((x) => x.link === linkCategory).title
      : "Všechny okruhy";

   // Setup states
   const [error, setError] = useState(false);
   const [data, setData] = useState([]);

   // Feedback
   const [feedbackList, setFeedbackList] = useState([]);
   const showFeedback = (type, customText = false) => {
      const feedback = {
         type,
         id: feedbackList.length + 1,
         msgNum: Math.floor(Math.random() * textsLength),
         customText,
      };
      setFeedbackList([...feedbackList, feedback]);
   };

   // test | finished
   const [testPhase, setTestPhase] = useState("test");
   const [progress, setProgress] = useState([
      ...Array(questionCount).fill("unanswered"),
   ]); // progress bar, generate all unanswered on first load
   const [currentQuestion, setCurrentQuestion] = useState(0); // # of current question

   // Call API on load
   useEffect(() => {
      fetchData();
   }, []);

   const generateOptions = (optionArr) =>
      optionArr
         .map((option, i) => ({
            text: option,
            correct: i === 0,
            clicked: false,
         }))
         .map((value) => ({ value, sort: Math.random() }))
         .sort((a, b) => a.sort - b.sort)
         .map(({ value }) => value);

   const fetchData = async () => {
      await axios
         .get(`${apiLink}/questions/random/${questionCount}`)
         .then(({ data }) =>
            setData(
               data.map(
                  (
                     {
                        id,
                        type,
                        question,
                        category,
                        correctAnswer,
                        otherAns1,
                        otherAns2,
                        otherAns3,
                        additionalInstructions,
                        afterAnswering,
                     },
                     i
                  ) => ({
                     questionIndex: i,
                     id,
                     question,
                     options: generateOptions([
                        correctAnswer,
                        otherAns1,
                        otherAns2,
                        otherAns3,
                     ]),
                     category,
                     questionType: type,
                     additionalInstructions,
                     afterAnswering,
                     firstWrongAnswer: undefined,
                  })
               )
            )
         )
         .catch((error) => {
            setError(error);
            console.log(error);
         });
   };

   const getWidth = () => {
      const width = window.innerWidth;
      if (width > 600) return 600;
      else return width;
   };

   // handleAnswer(true) = go to next question
   const handleAnswer = (isCorrect, forceIncrement) => {
      if (isCorrect) {
         // change the state of progress square
         if (progress[currentQuestion] != "wrong") {
            const newState = progress;
            newState[currentQuestion] = "correct";
            setProgress(newState);
            showFeedback("correct");
         }
      } else {
         // change the state of progress square to wrong
         const newState = progress;
         newState[currentQuestion] = "wrong";
         setProgress(newState);
      }

      // increment the current question
      // forceIncrement for Input questions
      if (isCorrect || forceIncrement) {
         // increment the current question
         if (currentQuestion + 1 < questionCount)
            setCurrentQuestion(currentQuestion + 1);
         // if at the end, change the screen
         else
            setTimeout(() => {
               setTestPhase("finished");
            }, 300);
      }
   };

   if (error) return <h2>Nepovedlo se načíst data!</h2>;
   else
      return (
         <div id="app">
            <nav>
               <Link to="/">
                  <img src="https://cdn.glitch.com/670a13b5-0cc9-4d3a-8da5-839cb4b16eb3%2Fcross.svg?v=1632660886246" />
               </Link>
               <div className="nav-title">{testCategory}</div>
               <div></div>
            </nav>
            <main id="main">
               <Progress data={{ progress, currentQuestion, testPhase }} />

               {testPhase == "finished" ? (
                  <Finished data={{ data, progress, testCategory }} />
               ) : (
                  <div
                     className={`questions ${currentQuestion}`}
                     style={{
                        transform: `translateX(-${
                           getWidth() * currentQuestion
                        }px)`,
                     }}
                  >
                     {data.length == 0 ? (
                        <div className="loading">
                           <img src="https://cdn.glitch.com/670a13b5-0cc9-4d3a-8da5-839cb4b16eb3%2Ficon.png?v=1632763894867" />
                           <h3>Načíítáámm....</h3>
                        </div>
                     ) : (
                        data.map((question, index) => (
                           <Question
                              data={{
                                 question,
                                 handleAnswer,
                                 currentQuestion,
                                 showFeedback,
                              }}
                              key={index}
                           />
                        ))
                     )}
                  </div>
               )}
            </main>
            <Feedback feedbackList={feedbackList} />
         </div>
      );
};

export default Test;
