import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Finished = ({ data: { data: defaultData, progress, testCategory } }) => {
  useEffect(() => {
    getImage();
  }, []);

  const [image, setImage] = useState(false);
  const [showRecapitulation, setShowRecapitulation] = useState(false);

  const numOfCorrect = progress.filter(x => x == "correct").length;
  const percentage =
    numOfCorrect > 0 ? (numOfCorrect / progress.length) * 100 : 0;
  const num = Math.floor(percentage / 10) + 1;

  const getImage = async () => {
    const range = `B${num}`;
    const url = `https://sheets.googleapis.com/v4/spreadsheets/1Kzipb2bdwjtufDWkpvCo6_bPRVvi3pQ9tcljzeshDAo/values/Gifs!${range}?key=AIzaSyA8wbmMP0xUPYtnCHkYoY9kZyWE0HJ2dCA`;
    const data = await axios.get(url).then(({ data }) => data.values[0][0]);
    setImage(data);
  };

  // Check if additional instructions is a link
  const isALink = string => string.slice(0, 4) == "http";

  // print instructions (if its an image, insert image, if not, insert text)
  const printInstructions = question => {
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

  const reportQuestion = () => {
    const message = prompt(
      "To snad ne! Napiš, prosím, co je s otázkou (odpovědí) špatně:"
    );
    console.log(message);
  };

  if (!showRecapitulation)
    return (
      <div className="finished">
        <h2>
          A je to, test z kategorie {testCategory} jsi zvládl/a s úspěšností
        </h2>
        <h1>{Math.floor(percentage)}%</h1>
        {image ? (
          <img src={image} />
        ) : (
          `Načítám obrázek odpovídající tvému ${
            percentage < 70 ? "slabému" : "skvělému"
          } výkonu...`
        )}
        <div className="container-two-btns">
          <Link to="/" className="btn btn-empty">
            Ukončit test
          </Link>
          <a
            href="#"
            className="btn btn-secondary"
            onClick={() => setShowRecapitulation(true)}
          >
            Zobrazit mé odpovědi
          </a>
        </div>
      </div>
    );
  else {
    const printData = defaultData.map((question, i) => ({
      ...question,
      state: progress[i]
    }));
    console.log(printData)

    return (
      <div className="recapitulation">
        <h2>Přehled tvých odpovědí</h2>
        <div className="hint">
          <p>
            <b>Nápověda:</b> Nesprávně odpovězené otázky se ti v budoucnu
            zobrazí automaticky znovu.
          </p>
          <p>
            U správně odpovězených otázek můžeš kliknout na “Neumím” a my ti
            otázku hodíme k zopakování.
          </p>
          <p>
            Jestli si myslíš, že máme někde chybu, nahlaš otázku prostřednictvím
            “Nahlásit otázku”
          </p>
        </div>
        {printData.map((question, i) => (
          <div
            className={`recapitulation-question recapitulation-${question.state}`}
            key={i}
          >
            {printInstructions(question)}
            <p>{question.question}</p>

            {question.state === "correct" ? (
              <>
                <b>Tvoje (správná) odpověď:</b>,
                <p>{question.options.find(x => x.correct === true).text}</p>
              </>
            ) : (
              <>
                <b>Tvoje odpověď:</b>
                <p>[]</p>
              </>
            )}
            <div className="container-two-btns">
              <a href="#" className="btn btn-secondary">
                Neumím
              </a>
              <a
                href="#"
                className="btn btn-secondary btn-critical"
                onClick={() => reportQuestion()}
              >
                Nahlásit otázku
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default Finished;
