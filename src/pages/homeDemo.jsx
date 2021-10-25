import axios from "axios";
import React, { useEffect, useState } from "react";
import useToken from "../components/useToken";
import { locations } from "../data";

const Home = () => {
   const {
      token: { email: userEmail },
   } = useToken();

   const [qr, setQr] = useState({ state: "loading", link: "" });

   const msg = userEmail;
   const amount = "1200.00";
   const bankCode = 2010;
   const accountNumber = 2202031955;

   useEffect(async () => {
      await fetch(
         `http://api.paylibo.com/paylibo/generator/czech/image?accountNumber=${accountNumber}&bankCode=${bankCode}&amount=${amount}&currency=CZK&message=${msg}&branding=false`
      )
         .then((res) => {
            return res.blob();
         })
         .then((data) => {
            setQr({ state: "success" });
            var objectURL = URL.createObjectURL(data);
            document.getElementById("qr").src = objectURL;
         })
         .catch((err) => {
            setQr({ state: "error" });
            console.log(err);
         });
   }, []);

   return (
      <div>
         <div className="section wf-section">
            <div className="container w-container">
               <h1 className="main-heading">👋 Vítej v ukázkové verzi</h1>
               <div className="columns w-row">
                  <div className="column w-col w-col-8">
                     {" "}
                     <h2 className="instructions__heading">
                        Chceš plnou verzi?
                     </h2>
                     <ol role="list" className="welcome__instructions">
                        <li className="instructions__item">
                           Koukni, jestli je to pro tebe to pravé
                        </li>
                        <li className="instructions__item">
                           Zašli <strong>1200 Kč </strong>
                           prostřednictvím QR kódu, nebo na účet{" "}
                           <strong>2202031955/2010‍</strong> a jako{" "}
                           <strong>zprávu pro příjemce </strong>uveď email, pod
                           kterým jsi přihlášen ({userEmail})
                        </li>
                        <li className="instructions__item">
                           Do 12 hodin zašleme přístupové údaje k tvému kurzu,
                           který ti zůstane až do posmrtného života
                        </li>
                     </ol>
                  </div>
                  <div className="column w-col w-col-4">
                     <h2 className="instructions__heading text-center">
                        QR kód
                     </h2>
                     {qr.state === "loading"
                        ? "Generuji QR kód"
                        : qr.state === "error"
                        ? "Chyba: QR kód se nepovedlo vytvořit"
                        : ""}
                     <img id="qr" className="qr" />
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
                        {locations.map(({ title }, i) => (
                           <a
                              key={i}
                              href="#"
                              className="app-list__item w-inline-block is-disabled"
                              style={{ borderColor: "rgba(0, 0, 0, 0)" }}
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
                        <div className="w-dyn-list">
                           <div role="list" className="app-list w-dyn-items">
                              <div role="listitem" className="w-dyn-item">
                                 <a
                                    href="https://docs.google.com/document/d/1Wjj0KWJ_He2EHgreahDEWkVAF6GVQfTKKUCM0S9LR9A"
                                    target="_blank"
                                    className="app-list__item w-inline-block "
                                 >
                                    <div>UKÁZKA Obecná psychologie 1/2</div>
                                 </a>
                              </div>
                              <div role="listitem" className="w-dyn-item">
                                 <a
                                    href="https://docs.google.com/document/d/1YW5P1SHaGGBEEZaIkg5TqS2JJ9MrnUO7BvM9Y7HmE_M"
                                    target="_blank"
                                    className="app-list__item w-inline-block "
                                 >
                                    <div>
                                       UKÁZKA Atkinsonová - Testy k psychologii{" "}
                                    </div>
                                 </a>
                              </div>
                              <div role="listitem" className="w-dyn-item">
                                 <a
                                    style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                                    href="#"
                                    target="_blank"
                                    className="app-list__item w-inline-block is-disabled"
                                 >
                                    <div>Všechny materiály</div>
                                 </a>
                              </div>
                              <div role="listitem" className="w-dyn-item">
                                 <a
                                    style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                                    href="#"
                                    target="_blank"
                                    className="app-list__item w-inline-block is-disabled"
                                 >
                                    <div>2. Obecná psychologie 2/2</div>
                                 </a>
                              </div>
                              <div role="listitem" className="w-dyn-item">
                                 <a
                                    style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                                    href="#"
                                    target="_blank"
                                    className="app-list__item w-inline-block is-disabled"
                                 >
                                    <div>3. Vývojová psychologie 1/2</div>
                                 </a>
                              </div>
                              <div role="listitem" className="w-dyn-item">
                                 <a
                                    style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                                    href="#"
                                    target="_blank"
                                    className="app-list__item w-inline-block is-disabled"
                                 >
                                    <div>4. Vývojová psychologie 2/2</div>
                                 </a>
                              </div>
                              <div role="listitem" className="w-dyn-item">
                                 <a
                                    style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                                    href="#"
                                    target="_blank"
                                    className="app-list__item w-inline-block is-disabled"
                                 >
                                    <div>
                                       5. Psychologie osobnosti a sociální
                                       psychologie
                                    </div>
                                 </a>
                              </div>
                              <div role="listitem" className="w-dyn-item">
                                 <a
                                    style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                                    href="#"
                                    target="_blank"
                                    className="app-list__item w-inline-block is-disabled"
                                 >
                                    <div>6. Metodologie</div>
                                 </a>
                              </div>
                              <div role="listitem" className="w-dyn-item">
                                 <a
                                    style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                                    href="#"
                                    target="_blank"
                                    className="app-list__item w-inline-block is-disabled"
                                 >
                                    <div>7. Jména psychologů a termíny</div>
                                 </a>
                              </div>
                              <div role="listitem" className="w-dyn-item">
                                 <a
                                    style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                                    href="#"
                                    target="_blank"
                                    className="app-list__item w-inline-block is-disabled"
                                 >
                                    <div>
                                       8. Atkinsonová - testy k psychologii
                                    </div>
                                 </a>
                              </div>
                              <div role="listitem" className="w-dyn-item">
                                 <a
                                    style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                                    href="#"
                                    target="_blank"
                                    className="app-list__item w-inline-block is-disabled"
                                 >
                                    <div>
                                       9. Chci studovat Psychologii 1/3 - výklad
                                    </div>
                                 </a>
                              </div>
                              <div role="listitem" className="w-dyn-item">
                                 <a
                                    style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                                    href="#"
                                    target="_blank"
                                    className="app-list__item w-inline-block is-disabled"
                                 >
                                    <div>
                                       10. Chci studovat Psychologii 2/3 -
                                       otázky a odpovědi
                                    </div>
                                 </a>
                              </div>
                              <div role="listitem" className="w-dyn-item">
                                 <a
                                    style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                                    href="#"
                                    target="_blank"
                                    className="app-list__item w-inline-block is-disabled"
                                 >
                                    <div>
                                       11. Chci studovat Psychologii 3/3 - test
                                    </div>
                                 </a>
                              </div>
                              <div role="listitem" className="w-dyn-item">
                                 <a
                                    style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                                    href="#"
                                    target="_blank"
                                    className="app-list__item w-inline-block is-disabled"
                                 >
                                    <div>
                                       12. Hoskovcová - testy na psychologii
                                    </div>
                                 </a>
                              </div>
                              <div role="listitem" className="w-dyn-item">
                                 <a
                                    style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                                    href="#"
                                    target="_blank"
                                    className="app-list__item w-inline-block is-disabled"
                                 >
                                    <div>13. Kočárek - biologie člověka</div>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
export default Home;
