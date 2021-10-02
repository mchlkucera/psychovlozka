import React from "react";

const Popup = ({ data: { popup, closePopup } }) => {
  // Popup after wrong input submit
  if (popup.isAfterInputPopup)
    return (
      <div
        className={`popup ${typeof popup === "object" && "active"}`}
        href="#"
      >
        {!popup.inputData.isCorrect && (
          <>
            <p>
              <b>Tvoje odpověď:</b> {popup.inputData.input}
            </p>
            <p>
              <b>Správná odpověď:</b> {popup.inputData.answer}
            </p>
          </>
        )}
        {popup.content && (
          <>
            <b>Další informace: </b>
            {popup.content}
          </>
        )}
        <div className="container-two-btns">
          {!popup.inputData.isCorrect && (
            <a
              onClick={() => closePopup(true)}
              className="btn btn-secondary btn-critical"
            >Tak to jste mi měli uznat</a>
          )}
          <a onClick={() => closePopup()} className="btn btn-secondary">
            Ok, další otázka
          </a>
        </div>
      </div>
    );
  // Simple popup
  else
    return (
      <div
        className={`popup ${typeof popup === "object" && "active"}`}
        href="#"
      >
        {popup.content}
        <a onClick={() => closePopup()} className="btn btn-secondary">
          Dobré vědět
        </a>
      </div>
    );
};

export default Popup;
