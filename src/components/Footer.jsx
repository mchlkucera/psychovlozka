import React from "react";

import { link } from "../data";

const Footer = () => {
   return (
      <footer id="footer" className="footer is-small wf-section">
         <div className="w-container">
            <div className="small-footer__container">
               <div className="small-footer__item is-flex">
                  <img
                     src={`${link}/images/logo-icon.png`}
                     loading="lazy"
                     alt=""
                     className="small-footer__image"
                  />
                  <div className="copyright margin-left">
                     © Psychovložka 2021
                     <br />
                  </div>
               </div>
               <div className="small-footer__item">
                  <div>
                     Chyba? Depka? <a href="#footer">Napiš nám</a>!
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
