import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { locations, textsLength } from "../data.js";

// Import components
import Question from "../components/Question.jsx";
import Progress from "../components/Progress.jsx";
import Feedback from "../components/Feedback.jsx";
import Finished from "../components/Finished.jsx";

const Test = () => {

  // Settings
  const questionCount = 15;
  
  // Get category from slug
  const linkCategory = useParams().category;
  const testCategory = linkCategory
    ? locations.filter(x => x.link === linkCategory)[0].title
    : "Všechny okruhy";

  // Setup states
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // Feedback
  const [feedbackList, setFeedbackList] = useState([]);
  const showFeedback = (type, customText = false) => {
    const feedback = {
      type,
      id: feedbackList.length + 1,
      msgNum: Math.floor(Math.random() * textsLength),
      customText
    };
    setFeedbackList([...feedbackList, feedback]);
  };

  // test | finished
  const [testPhase, setTestPhase] = useState("test");
  const [progress, setProgress] = useState([
    ...Array(questionCount).fill("unanswered")
  ]); // progress bar, generate all unanswered on first load
  const [currentQuestion, setCurrentQuestion] = useState(0); // # of current question

  
  // Call API on load
  useEffect(() => {
    fetchData();
  }, []);

  // Call API function
  const url =
    "https://sheets.googleapis.com/v4/spreadsheets/1Kzipb2bdwjtufDWkpvCo6_bPRVvi3pQ9tcljzeshDAo/values/Questions!A1:J?key=AIzaSyA8wbmMP0xUPYtnCHkYoY9kZyWE0HJ2dCA";
  // const textsUrl =
  //   "https://sheets.googleapis.com/v4/spreadsheets/1Kzipb2bdwjtufDWkpvCo6_bPRVvi3pQ9tcljzeshDAo/values/Texts!A2:B?key=AIzaSyA8wbmMP0xUPYtnCHkYoY9kZyWE0HJ2dCA";
  
  const fetchData = async () => {    
    await axios
      .get(url)
      .then(({ data }) => handleData(data.values))
      .catch(error => {
        setError(error), console.log(error);
      });

    // await axios
    //   .get(textsUrl)
    //   .then(({ data }) => {
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     setError(error), console.log(error);
    //   });
  };

  // Filter array
  const filterArray = array => {
    //return array.filter(x => (x[2] === "text" && x[8].length>0)); // only input with additional inf
    if (testCategory == "Všechny okruhy") return array;
    return array.filter(x => x[1] == testCategory);
  };

  // Shuffle array
  const shuffleArray = array =>
    array
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

  // shuffle options, return it as an object
  const formatOptions = item => {
    const options = [item[3], item[4], item[5], item[6]];
    //shuffling options
    const shuffledOptions = shuffleArray(options);

    //making an object
    const objectOptions = shuffledOptions.map(option => ({
      text: option,
      correct: option === item[3],
      clicked: false
    }));
    return objectOptions;
  };

  // Filter questions, shuffle questions, select 10 (or according to user settings)
  const handleData = data => {
    // filter the category
    const filteredArray = filterArray(data);
    // get the right amount
    const getNRandom = shuffleArray(filteredArray).slice(1, questionCount + 1);
    // edit data format
    const makeObject = getNRandom.map((item, index) => {
      // shuffle options, make it an object
      const options = formatOptions(item);
      return {
        questionIndex: index,
        question: item[0],
        category: item[1],
        questionType: item[2],
        options,
        additionalInstructions: item[7],
        afterAnswering: item[8]
      };
    });
    setData(makeObject);
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
          <Progress
            data={{progress,currentQuestion,testPhase}}
          />
          {testPhase == "finished" ? (
            <Finished data={{ data, progress, testCategory }} />
          ) : (
            <div
              className={`questions ${currentQuestion}`}
              style={{
                transform: `translateX(-${getWidth() * currentQuestion}px)`
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
                      showFeedback
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
