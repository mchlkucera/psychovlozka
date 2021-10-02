import React, { useEffect, useState } from "react";

const Options = ({data:{ options, isCurrent, handleOptionClick, handleInputSubmit, type, instructions }}) => {
  const [input, setInput] = useState("");
  const handleInput = (e) => setInput(e.target.value)
  
  if (type === "abcd") {
    const getClassName = index => {
      if (!options[index].clicked) return "options-unclicked"
      else return `options-${options[index].correct ? "correct":"wrong"}`
    }

    const buttons = options.map((object, index) => (
      <button
        key={index}
        className={getClassName(index)}
        onClick={() => handleOptionClick(index)}
      >
        {object.text}
      </button>
    ));
    return <div id="options">{buttons}</div>;
  } 
  
  // Text input
  else return <form onSubmit={e=>e.preventDefault()}>
      <input type="text" autoFocus={isCurrent} className="input" placeholder={instructions} value={input} onInput={e=>handleInput(e)}/>
      <input type="submit" className="btn btn-secondary" value="Potvrdit" onClick={()=>handleInputSubmit(input)}/>
    </form>
};

export default Options;
