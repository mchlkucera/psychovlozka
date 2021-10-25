import React from "react";
import { locations, materials } from "../data";

const Home = () => {
   return (
      <div>
         <div className="section wf-section">
            <div className="container w-container">
               <h1>👋 Vítej zpátky!</h1>
               <div className="welcome__launch-test">
                  <div className="welcome__text">
                     Máš přečtený <a href="navod">Návod ke studiu</a>?
                     <br />
                     Jestli jo, jdeme na test!
                  </div>
                  <div className="container-two-btns">
                     <a href="test" className="btn btn-primary w-button">
                        Test ze všech okruhů
                     </a>
                     {/* <a
                        href="/test/vyvojova-psychologie"
                        className="btn btn-empty w-button"
                     >
                        Vývojová psychologie
                     </a> */}
                  </div>
               </div>
            </div>
         </div>

         <div className="section wf-section">
            <div className="container w-container">
               <div className="columns w-row">
                  <div className="column w-col w-col-6">
                     <h2 className="column__h1">📚 Výběr testu z okruhu:</h2>
                     <div className="app-list">
                        {locations.map(({ title, link }, i) => (
                           <a
                              key={i}
                              data-w-id="4ba702ea-9bb6-32ab-200d-852df43c0c36"
                              href={`/test/${link}`}
                              className="app-list__item w-inline-block"
                           >
                              <div>{title}</div>
                              <div className="app-item__percentage">20%</div>
                           </a>
                        ))}
                     </div>
                  </div>

                  <div className="column w-col w-col-6">
                     <h2 className="column__h1">📎 Odkazy na materiály</h2>
                     <div className="app-list">
                        {materials.map(({ title, link }, i) => (
                           <a
                              key={i}
                              href={link}
                              target="_blank"
                              className="app-list__item w-inline-block"
                           >
                              <div>{title}</div>
                           </a>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
export default Home;
