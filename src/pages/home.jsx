import React from "react";
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
                        Všechny okruhy
                     </a>
                     <a
                        href="/test/vyvojova-psychologie"
                        className="btn btn-empty w-button"
                     >
                        Vývojová psychologie
                     </a>
                  </div>
               </div>
            </div>
         </div>
         <div className="section wf-section">
            <div className="container w-container">
               <div className="w-row">
                  <div className="w-col w-col-6">
                     <h2 className="app-list__heading">
                        📚 Výběr testu z okruhu:
                     </h2>
                     <div className="app-list">
                        <a
                           data-w-id="4ba702ea-9bb6-32ab-200d-852df43c0c36"
                           style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                           href="/test/obecna-psychologie"
                           className="app-list__item w-inline-block"
                        >
                           <div className="app-item__percentage">20%</div>
                        </a>
                        <a
                           data-w-id="ce69e2d8-14c0-be53-25c3-90692caf225f"
                           style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                           href="/test/vyvojova-psychologie"
                           className="app-list__item w-inline-block"
                        >
                           <div>Vývojová psychologie</div>
                           <div className="app-item__percentage">20%</div>
                        </a>
                        <a
                           data-w-id="c5d8c0a0-3753-1e6a-5a38-51d572925a16"
                           style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                           href="/test/psychologie-osobnosti-a-socialni-psychologie"
                           className="app-list__item w-inline-block"
                        >
                           <div className="text-block-2">
                              Psychologie osobnosti a sociální psychologie
                           </div>
                           <div className="app-item__percentage">20%</div>
                        </a>
                        <a
                           data-w-id="d4b1d005-16f3-ccce-ed1e-ee1b30a0c65b"
                           style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                           href="/test/chci-studovat-psychologii"
                           className="app-list__item w-inline-block"
                        >
                           <div>Chci studovat Psychologii - výklad</div>
                           <div className="app-item__percentage">20%</div>
                        </a>
                        <a
                           data-w-id="c7c22a61-790d-5831-b7e9-0aef7a968adc"
                           style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                           href="/test/jmena"
                           className="app-list__item w-inline-block"
                        >
                           <div>Jména</div>
                           <div className="app-item__percentage">20%</div>
                        </a>
                        <a
                           data-w-id="6ca88332-4d7f-e8b3-0a5c-14454d2a07d0"
                           style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                           href="/test/testy-hoskovcova"
                           className="app-list__item w-inline-block"
                        >
                           <div>Testy na psychologii - Hoskovcová</div>
                           <div className="app-item__percentage">20%</div>
                        </a>
                        <a
                           data-w-id="d11e926a-ae1a-74c7-2649-a3960900bfa4"
                           style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                           href="/test/testy-atkinsonova"
                           className="app-list__item w-inline-block"
                        >
                           <div>Testy na psychologii - Atkinsonová</div>
                           <div className="app-item__percentage">20%</div>
                        </a>
                        <a
                           data-w-id="a1445974-fc15-3356-014d-80d6c0256724"
                           style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                           href="/test/metodologie"
                           target="_blank"
                           className="app-list__item w-inline-block"
                        >
                           <div>Metodologie</div>
                           <div className="app-item__percentage">20%</div>
                        </a>
                     </div>
                  </div>
                  <div className="w-col w-col-6">
                     <h2 className="app-list__heading">
                        📎 Odkazy na materiály
                     </h2>
                     <div className="app-list">
                        <div className="w-dyn-list">
                           <div role="list" className="app-list w-dyn-items">
                              <div role="listitem" className="w-dyn-item">
                                 <a
                                    data-w-id="07f1981d-8fa3-adb4-0456-613f12f89cfe"
                                    style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                                    href="/test/sharing"
                                    target="_blank"
                                    className="app-list__item w-inline-block"
                                 >
                                    <div>Všechny materiály</div>
                                    <div
                                       style={{
                                          transform:
                                             "translate3d(12px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                          opacity: 0,
                                          transformStyle: "preserve-3d",
                                       }}
                                       className="icon big"
                                    >
                                       open_in_new
                                    </div>
                                 </a>
                              </div>
                              <div role="listitem" className="w-dyn-item">
                                 <a
                                    data-w-id="07f1981d-8fa3-adb4-0456-613f12f89cfe"
                                    style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                                    href="/test/sharing"
                                    target="_blank"
                                    className="app-list__item w-inline-block"
                                 >
                                    <div>1. Obecná psychologie 1/2</div>
                                    <div
                                       style={{
                                          transform:
                                             "translate3d(12px, 0px, 0px)                                      scale3d(1, 1, 1) rotateX(0deg)                                      rotateY(0deg) rotateZ(0deg)                                      skew(0deg, 0deg)",
                                          opacity: 0,
                                          transformStyle: "preserve-3d",
                                       }}
                                       className="icon big"
                                    >
                                       open_in_new
                                    </div>
                                 </a>
                              </div>
                              <div role="listitem" className="w-dyn-item">
                                 <a
                                    data-w-id="07f1981d-8fa3-adb4-0456-613f12f89cfe"
                                    style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                                    href="/test/sharing"
                                    target="_blank"
                                    className="app-list__item w-inline-block"
                                 >
                                    <div>2. Obecná psychologie 2/2</div>
                                    <div
                                       style={{
                                          transform:
                                             "translate3d(12px, 0px, 0px)                                      scale3d(1, 1, 1) rotateX(0deg)                                      rotateY(0deg) rotateZ(0deg)                                      skew(0deg, 0deg)",
                                          opacity: 0,
                                          transformStyle: "preserve-3d",
                                       }}
                                       className="icon big"
                                    >
                                       open_in_new
                                    </div>
                                 </a>
                              </div>
                              <div role="listitem" className="w-dyn-item">
                                 <a
                                    data-w-id="07f1981d-8fa3-adb4-0456-613f12f89cfe"
                                    style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                                    href="/test/sharing"
                                    target="_blank"
                                    className="app-list__item w-inline-block"
                                 >
                                    <div>3. Vývojová psychologie 1/2</div>
                                    <div
                                       style={{
                                          transform:
                                             "translate3d(12px, 0px, 0px)                                      scale3d(1, 1, 1) rotateX(0deg)                                      rotateY(0deg) rotateZ(0deg)                                      skew(0deg, 0deg)",
                                          opacity: 0,
                                          transformStyle: "preserve-3d",
                                       }}
                                       className="icon big"
                                    >
                                       open_in_new
                                    </div>
                                 </a>
                              </div>
                              <div role="listitem" className="w-dyn-item">
                                 <a
                                    data-w-id="07f1981d-8fa3-adb4-0456-613f12f89cfe"
                                    style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                                    href="/test/sharing"
                                    target="_blank"
                                    className="app-list__item w-inline-block"
                                 >
                                    <div>4. Vývojová psychologie 2/2</div>
                                    <div
                                       style={{
                                          transform:
                                             "translate3d(12px, 0px, 0px)                                      scale3d(1, 1, 1) rotateX(0deg)                                      rotateY(0deg) rotateZ(0deg)                                      skew(0deg, 0deg)",
                                          opacity: 0,
                                          transformStyle: "preserve-3d",
                                       }}
                                       className="icon big"
                                    >
                                       open_in_new
                                    </div>
                                 </a>
                              </div>
                              <div role="listitem" className="w-dyn-item">
                                 <a
                                    data-w-id="07f1981d-8fa3-adb4-0456-613f12f89cfe"
                                    style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                                    href="/test/sharing"
                                    target="_blank"
                                    className="app-list__item w-inline-block"
                                 >
                                    <div>
                                       5. Psychologie osobnosti a sociální
                                       psychologie
                                    </div>
                                    <div
                                       style={{
                                          transform:
                                             "translate3d(12px, 0px, 0px)                                      scale3d(1, 1, 1) rotateX(0deg)                                      rotateY(0deg) rotateZ(0deg)                                      skew(0deg, 0deg)",
                                          opacity: 0,
                                          transformStyle: "preserve-3d",
                                       }}
                                       className="icon big"
                                    >
                                       open_in_new
                                    </div>
                                 </a>
                              </div>
                              <div role="listitem" className="w-dyn-item">
                                 <a
                                    data-w-id="07f1981d-8fa3-adb4-0456-613f12f89cfe"
                                    style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                                    href="/test/sharing"
                                    target="_blank"
                                    className="app-list__item w-inline-block"
                                 >
                                    <div>6. Metodologie</div>
                                    <div
                                       style={{
                                          transform:
                                             "translate3d(12px, 0px, 0px)                                      scale3d(1, 1, 1) rotateX(0deg)                                      rotateY(0deg) rotateZ(0deg)                                      skew(0deg, 0deg)",
                                          opacity: 0,
                                          transformStyle: "preserve-3d",
                                       }}
                                       className="icon big"
                                    >
                                       open_in_new
                                    </div>
                                 </a>
                              </div>
                              <div role="listitem" className="w-dyn-item">
                                 <a
                                    data-w-id="07f1981d-8fa3-adb4-0456-613f12f89cfe"
                                    style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                                    href="/test/sharing"
                                    target="_blank"
                                    className="app-list__item w-inline-block"
                                 >
                                    <div>7. Jména psychologů a termíny</div>
                                    <div
                                       style={{
                                          transform:
                                             "translate3d(12px, 0px, 0px)                                      scale3d(1, 1, 1) rotateX(0deg)                                      rotateY(0deg) rotateZ(0deg)                                      skew(0deg, 0deg)",
                                          opacity: 0,
                                          transformStyle: "preserve-3d",
                                       }}
                                       className="icon big"
                                    >
                                       open_in_new
                                    </div>
                                 </a>
                              </div>
                              <div role="listitem" className="w-dyn-item">
                                 <a
                                    data-w-id="07f1981d-8fa3-adb4-0456-613f12f89cfe"
                                    style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                                    href="/test/sharing"
                                    target="_blank"
                                    className="app-list__item w-inline-block"
                                 >
                                    <div>
                                       8. Atkinsonová - testy k psychologii
                                    </div>
                                    <div
                                       style={{
                                          transform:
                                             "translate3d(-12px, 0px, 0px)                                      scale3d(1, 1, 1) rotateX(0deg)                                      rotateY(0deg) rotateZ(0deg)                                      skew(0deg, 0deg)",
                                          opacity: 0,
                                          transformStyle: "preserve-3d",
                                       }}
                                       className="icon big"
                                    >
                                       open_in_new
                                    </div>
                                 </a>
                              </div>
                              <div role="listitem" className="w-dyn-item">
                                 <a
                                    data-w-id="07f1981d-8fa3-adb4-0456-613f12f89cfe"
                                    style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                                    href="/test/sharing"
                                    target="_blank"
                                    className="app-list__item w-inline-block"
                                 >
                                    <div>
                                       9. Chci studovat Psychologii 1/3 - výklad
                                    </div>
                                    <div
                                       style={{
                                          transform:
                                             "translate3d(-12px, 0px, 0px)                                      scale3d(1, 1, 1) rotateX(0deg)                                      rotateY(0deg) rotateZ(0deg)                                      skew(0deg, 0deg)",
                                          opacity: 0,
                                          transformStyle: "preserve-3d",
                                       }}
                                       className="icon big"
                                    >
                                       open_in_new
                                    </div>
                                 </a>
                              </div>
                              <div role="listitem" className="w-dyn-item">
                                 <a
                                    data-w-id="07f1981d-8fa3-adb4-0456-613f12f89cfe"
                                    style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                                    href="/test/sharing"
                                    target="_blank"
                                    className="app-list__item w-inline-block"
                                 >
                                    <div>
                                       10. Chci studovat Psychologii 2/3 -
                                       otázky a odpovědi
                                    </div>
                                    <div
                                       style={{
                                          transform:
                                             "translate3d(-12px, 0px, 0px)                                      scale3d(1, 1, 1) rotateX(0deg)                                      rotateY(0deg) rotateZ(0deg)                                      skew(0deg, 0deg)",
                                          opacity: 0,
                                          transformStyle: "preserve-3d",
                                       }}
                                       className="icon big"
                                    >
                                       open_in_new
                                    </div>
                                 </a>
                              </div>
                              <div role="listitem" className="w-dyn-item">
                                 <a
                                    data-w-id="07f1981d-8fa3-adb4-0456-613f12f89cfe"
                                    style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                                    href="/test/sharing"
                                    target="_blank"
                                    className="app-list__item w-inline-block"
                                 >
                                    <div>
                                       11. Chci studovat Psychologii 3/3 - test
                                    </div>
                                    <div
                                       style={{
                                          transform:
                                             "translate3d(-12px, 0px, 0px)                                      scale3d(1, 1, 1) rotateX(0deg)                                      rotateY(0deg) rotateZ(0deg)                                      skew(0deg, 0deg)",
                                          opacity: 0,
                                          transformStyle: "preserve-3d",
                                       }}
                                       className="icon big"
                                    >
                                       open_in_new
                                    </div>
                                 </a>
                              </div>
                              <div role="listitem" className="w-dyn-item">
                                 <a
                                    data-w-id="07f1981d-8fa3-adb4-0456-613f12f89cfe"
                                    style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                                    href="/test/sharing"
                                    target="_blank"
                                    className="app-list__item w-inline-block"
                                 >
                                    <div>
                                       12. Hoskovcová - testy na psychologii
                                    </div>
                                    <div
                                       style={{
                                          transform:
                                             "translate3d(-12px, 0px, 0px)                                      scale3d(1, 1, 1) rotateX(0deg)                                      rotateY(0deg) rotateZ(0deg)                                      skew(0deg, 0deg)",
                                          opacity: 0,
                                          transformStyle: "preserve-3d",
                                       }}
                                       className="icon big"
                                    >
                                       open_in_new
                                    </div>
                                 </a>
                              </div>
                              <div role="listitem" className="w-dyn-item">
                                 <a
                                    data-w-id="07f1981d-8fa3-adb4-0456-613f12f89cfe"
                                    style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                                    href="/test/sharing"
                                    target="_blank"
                                    className="app-list__item w-inline-block"
                                 >
                                    <div>13. Kočárek - biologie člověka</div>
                                    <div
                                       style={{
                                          transform:
                                             "translate3d(-12px, 0px, 0px)                                      scale3d(1, 1, 1) rotateX(0deg)                                      rotateY(0deg) rotateZ(0deg)                                      skew(0deg, 0deg)",
                                          opacity: 0,
                                          transformStyle: "preserve-3d",
                                       }}
                                       className="icon big"
                                    >
                                       open_in_new
                                    </div>
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
