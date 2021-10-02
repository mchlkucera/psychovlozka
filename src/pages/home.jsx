import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const locations = [
    {
      title: "Obecná psychologie",
      link: "obecna-psychologie",
      id: 2
    },
    {
      title: "Vývojová psychologie",
      link: "vyvojova-psychologie",
      id: 3
    },
    {
      title: "Psychologie osobnosti a sociální psychologie",
      link: "psychologie-osobnosti-a-socialni-psychologie",
      id: 4
    },
    {
      title: "Chci studovat Psychologii 1/3 - výklad ",
      link: "chci-studovat-psychologii",
      id: 5
    },
    {
      title: "Jména",
      link: "jmena",
      id: 6
    },
    {
      title: "Testy na psychologii - Hoskovcová",
      link: "testy-hoskovcova",
      id: 7
    },
    {
      title: "Testy k psychologii - Atkinsonová",
      link: "testy-atkinsonova",
      id: 8
    },
    {
      title: "Metodologie",
      link: "metodologie",
      id: 9
    }
  ];
  return (
    <div className="home">
      <h2>Dobre rano na piano hraje Jack</h2>
      <ul>
        <li>
          <Link to="/test">Všechny okruhy</Link>
        </li>
      </ul>
      <h2>Okruhy</h2>
      <ul>
        {locations.map(({ title, link }, index) => (
          <li key={index}>
            <Link to={`/test/${link}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
