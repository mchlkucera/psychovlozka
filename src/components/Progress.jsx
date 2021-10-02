import React from "react";

const Progress = ({data:{progress, currentQuestion,testPhase}}) => {
  const indicators = progress.map((value, index) => {
    // unanswered | correct | wrong
    const className = `progress-${value} ${testPhase !== "finished" && currentQuestion == index &&
      "progress-active"}`;

    return <div key={index + 1} className={className}></div>;
  });

  return <div id="progress">{indicators}</div>;
};

export default Progress;
