import React, { useState } from "react";

import Options from "../components/Options.jsx";
import Popup from "../components/Popup.jsx";

const Question = ({
  data: {
    question: passedQuestion,
    showFeedback,
    handleAnswer,
    currentQuestion
  }
}) => {
  const [question, setQuestion] = useState(passedQuestion);
  const [popup, setPopup] = useState(false);

  // Check if additional instructions is a link
  const isALink = string => string.slice(0, 4) == "http";

  // handle abcd option click
  const handleOptionClick = index => {
    showFeedback(question.options[index].correct ? "correct" : "wrong");
    // if there's an after-info, give a timeout
    if (question.options[index].correct && question.afterAnswering)
      setPopup({ content: question.afterAnswering, index });
    else nextQuestion(index);
  };

  const showPopup = ({
    content,
    isAfterInputPopup = false,
    inputData = false,
    index
  }) => {
    setPopup({ content, index, inputData,isAfterInputPopup });
  };

  // handle text answers
  const handleInputSubmit = input => {
    // if empty, throw notification
    if (input.length == 0)
      return showFeedback("wrong", "Co tak napsat nějakou odpověď?");
    
    const answer = question.options.filter(x => x.correct)[0];
    const index = question.options.indexOf(answer);
    
    // remove diacritics, put both to lowercase
    const processedAnswer = answer.text
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "");
    const processedInput = input
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "");
    question.options[index].correct;

    
    // if correct, select the right answer as clicked
    const isCorrect = processedAnswer === processedInput;
    showFeedback(isCorrect?"correct":"wrong")

    // show popup if answer is incorrect
    // OR if there's after-info
    if(!isCorrect || question.afterAnswering) showPopup({
      content: question.afterAnswering,
      index,
      isAfterInputPopup: true,
      inputData: {
        isCorrect,
        input:input.toLowerCase(),
        answer:answer.text.toLowerCase()
      }
    });
    // go to next question if correct
    else handleAnswer(true)
  };

  // after closed Popup
  const closePopup = (acceptAnswer=false) => {
    const { index, isAfterInputPopup, inputData:{isCorrect} } = popup;
    if (isAfterInputPopup) {
      if(acceptAnswer) handleAnswer(true, true)
      else handleAnswer(isCorrect, true);
    }
    else nextQuestion(index);
    setPopup(false);
  };

  const nextQuestion = index => {
    // send feedback to the parent view - if it is correct, question will be moved
    handleAnswer(question.options[index].correct);

    // change the state of the options to clicked
    const newState = { ...question };
    newState.options[index].clicked = true;
    setQuestion(newState);
  };

  // print instructions (if its an image, insert image, if not, insert text)
  const printInstructions = () => {
    const instructions = question.additionalInstructions;
    if (instructions.length > 0)
      return isALink(instructions) ? (
        <img src={instructions} />
      ) : question.questionType === "abcd" ? (
        <div className="instructions">
          <b>Nápověda: </b>
          {instructions}
        </div>
      ) : (
        ""
      );
  };

  if (!question) return <p>Načítám...</p>;
  else
    return (
      <div
        className={`question ${currentQuestion === question.questionIndex &&
          "active"}`}
      >
        <Popup data={{ closePopup, popup }} />
        <div className="question-title">{question.question}</div>
        {printInstructions()}

        {/* insert a space and the options*/}
        <div className="space"></div>
        <Options
          data={{
            isCurrent: currentQuestion === question.questionIndex,
            handleInputSubmit,
            instructions: question.additionalInstructions,
            handleOptionClick,
            type: question.questionType,
            options: question.options
          }}
        />
      </div>
    );
};

export default Question;
