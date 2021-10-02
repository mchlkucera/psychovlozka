import React, { useEffect, useState } from "react";
import { texts } from "../data.js";
const correctMsg = texts.values.map(x => x[0]);
const wrongMsg = texts.values.map(x => x[1]);

const Feedback = ({ feedbackList }) => {
  const dismissTime = 2000;

  const [list, setList] = useState(feedbackList);

  // fill the list on load, generate random content
  useEffect(() => {
    setList([...feedbackList]);
  }, [feedbackList]);

  // set autodelete interval
  useEffect(() => {
    const interval = setInterval(() => {
      if (feedbackList.length && list.length)
        deleteFeedback(feedbackList[0].id);
    }, dismissTime);
    return () => {
      clearInterval(interval);
    };
  }, [feedbackList, dismissTime, list]);

  // delete feedback
  const deleteFeedback = id => {
    const listItemIndex = list.findIndex(e => e.id === id);
    const feedbackListItem = feedbackList.findIndex(e => e.id === id);
    list.splice(listItemIndex, 1);
    feedbackList.splice(feedbackList, 1);
    setList([...list]);
  };
  const deleteAllFeedback = () => setList([])

  return (
    <div className="feedback-container">
      {list.map(({ type, id, msgNum, customText }, i) => (
        <div
          key={i}
          className={`feedback feedback-${type}`}
          style={{ zIndex: id, cursor: "pointer" }}
          onClick={() => deleteAllFeedback(id)}
        >
          {// If there's customText, show customText
          // If not, show correct/wrong message
          typeof customText === "string"
            ? customText
            : type === "correct"
            ? correctMsg[msgNum]
            : wrongMsg[msgNum]}
          <a href="#">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1.23145L17 17.2314M17 1.23145L1 17.2314" className="cross-stroke" strokeWidth="2"/>
</svg>

          </a>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
