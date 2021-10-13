import React, { useEffect, useState } from "react";
import { apiLink as link } from "../data";

const VsechnyOtazky = () => {
   const [data, setData] = useState(0);
   const [error, setError] = useState(0);

   const fetchData = () => {
      fetch(`${link}/questions`)
         .then((data) => data.json())
         .then((data) => setData(data))
         .catch((err) => {
            console.log(err);
            setError(1);
         });
   };

   const printDataFromTo = (from, to) => {
      return data
         .slice(from, to)
         .map(
            (
               { category, additionalInstructions, question, correctAnswer },
               i
            ) => {
               const isUrl = additionalInstructions.slice(0, 4) === "http";
               const instructionsEl = isUrl ? (
                  <img src={additionalInstructions} alt="" />
               ) : (
                  additionalInstructions
               );

               return (
                  <div className="all-questions__item" key={i}>
                     <div className="small gray">{category}</div>
                     <div className="question__additional">
                        {instructionsEl}
                     </div>
                     <div className="question__content">{question}</div>
                     <div className="question__answer">{correctAnswer}</div>
                  </div>
               );
            }
         );
   };

   useEffect(() => {
      fetchData();
   }, []);

   return (
      <div className="section wf-section">
         <div className="container w-container">
            <h1 className="has-icon">
               <br />
               <span className="inline-icon is-big">receipt_long</span>Všechny
               otázky
            </h1>
            <div className="main w-row" id="content">
               {!data ? (
                  <div className="loading-jozo">
                     <img src="images/webclip.png" alt="Načítání" />
                     Načítání...
                  </div>
               ) : error ? (
                  <h1>Nepodařilo se načíst data</h1>
               ) : (
                  <>
                     <div className="w-col w-col-6">
                        {printDataFromTo(0, data.length / 2)}
                     </div>
                     <div className="w-col w-col-6">
                        {printDataFromTo(data.length / 2, data.length)}
                     </div>
                  </>
               )}
            </div>
         </div>
      </div>
   );
};

export default VsechnyOtazky;
