// const link = "http://localhost:3000";
const link = "https://psychovlozka.cz";
const apiLink = "https://psychovlozka-api.vercel.app";
// const apiLink = "http://localhost:5000";

const texts = {
   range: "Texts!A2:B1000",
   majorDimension: "ROWS",
   values: [
      ["Šikovný to počin", "Well yes but actually no"],
      ["Yespes, správně", "Nodog, špatně"],
      ["Tak to má být", "Tak takhle úplně ne"],
      ["Už jsi skoropsychovložka", "Jakoby ne no"],
      ["U good bro", "Zkus to znova"],
      ["Yeapgurl, správně!", "Nope"],
      ["U smart bro", "U not smart bro"],
      ["Takhle to má vypadat", "Takhle to nemá vypadat"],
      ["Wow, přenádherný výkon", "Těsně vedle"],
      ["Juchů!", "Střílíš vedle"],
      ["Správně! ", "Těžko na cvičišti.."],
      ["Tak tak, odměň se něčím!", "Špatně, hehe"],
      ["Jen tak dál", "Ale noo, snaž se"],
      ["Ty se ve světě neztratíš!", "Tudy cesta nevede"],
      ["Das ist rightg!", "Immer falsch!"],
      ["Přesně!", "A zase nic"],
      ["Ohromující výkon", "Akorát že vůbec"],
   ],
};
const textsLength = texts.values.length;
const locations = [
   {
      title: "Obecná psychologie",
      link: "obecna-psychologie",
      id: 2,
   },
   {
      title: "Vývojová psychologie",
      link: "vyvojova-psychologie",
      id: 3,
   },
   {
      title: "Psychologie osobnosti a sociální psychologie",
      link: "psychologie-osobnosti-a-socialni-psychologie",
      id: 4,
   },
   {
      title: "Chci studovat Psychologii 1/3 - výklad ",
      link: "chci-studovat-psychologii",
      id: 5,
   },
   {
      title: "Jména",
      link: "jmena",
      id: 6,
   },
   {
      title: "Testy na psychologii - Hoskovcová",
      link: "testy-hoskovcova",
      id: 7,
   },
   {
      title: "Testy k psychologii - Atkinsonová",
      link: "testy-atkinsonova",
      id: 8,
   },
   {
      title: "Metodologie",
      link: "metodologie",
      id: 9,
   },
];

const materials = [
   {
      title: "Všechny materiály",
      link: "https://drive.google.com/drive/folders/13alV6Lrd3ToboRj5JNLDNWc4qwOkLW9s?usp=sharing",
   },
   {
      title: "1. Obecná psychologie 1/2",
      link: "https://docs.google.com/document/d/1KkIziFa_76dflKepVe4x1QU3gtALheoLkQFzpbgJk1I/edit?usp=sharing",
   },
   {
      title: "2. Obecná psychologie 2/2",
      link: "https://docs.google.com/document/d/1kC2rxtcAnlfjr82P2sWflmZ_udXGuRZuKhoa5737GMM/edit?usp=sharing",
   },
   {
      title: "3. Vývojová psychologie 1/2",
      link: "https://docs.google.com/document/d/10J6DKCOhtwOtSYs2zqtkr6eFfGAhYvrWVGtZEjqxfrA/edit?usp=sharing",
   },
   {
      title: "4. Vývojová psychologie 2/2",
      link: "https://docs.google.com/document/d/1e1npF5Zuia8sRvigw8vGFAOveKqtMFq1z-g7bbxtXpU/edit?usp=sharing",
   },
   {
      title: "5. Psychologie osobnosti a sociální psychologie",
      link: "https://docs.google.com/document/d/1KMB7MHRwubeXNQ6U74XpDMo3TVqsPk9xPyyFypv111o/edit?usp=sharing",
   },
   {
      title: "6. Metodologie",
      link: "https://docs.google.com/document/d/1Jsa1rPWGc3LkYAy7WWYpj8ZPRRCZ0xYyHI5xpDi1A1c/edit?usp=sharing",
   },
   {
      title: "7. Jména psychologů a termíny",
      link: "https://docs.google.com/document/d/16d8DBNOKvrlc_AnFjtzE3o6jvYBB8Ea06hhIQ_a43ug/edit?usp=sharing",
   },
   {
      title: "8. Atkinsonová - testy k psychologii",
      link: "https://docs.google.com/document/d/1AkOMfb5albXNeicGDuVWgRFaSQIkL_QB69MAw8rKb9k/edit?usp=sharing",
   },
   {
      title: "9. Chci studovat Psychologii 1/3 - výklad",
      link: "https://docs.google.com/document/d/1RAdCO5WLXWkLccfslz6zky-rwWtZDiLMIW1U7uzsExg/edit?usp=sharing",
   },
   {
      title: "10. Chci studovat Psychologii 2/3 - otázky a odpovědi",
      link: "https://docs.google.com/document/d/1DXu52BYxhcqyXSbUbY5BAh1qq2u3eh3Ugh2ZOdYGqV8/edit?usp=sharing",
   },
   {
      title: "11. Chci studovat Psychologii 3/3 - test",
      link: "https://docs.google.com/document/d/11BH0lwzi3FS9Q77lB_BB-_Im75F4i6hMlOQOQgCKNMI/edit?usp=sharing",
   },
   {
      title: "12. Hoskovcová - testy na psychologii",
      link: "https://docs.google.com/document/d/1fYWtEonyn2TZzzBUnexqMl0sRFioTi3eAc4gENJ1xxU/edit?usp=sharing",
   },
   {
      title: "13. Kočárek - biologie člověka",
      link: "https://docs.google.com/document/d/1gJRRh2inWJwnmcxBEq6rcueMu9KOK0CJsTfp93wWnpY/edit?usp=sharing",
   },
];

export { texts, locations, textsLength, link, apiLink, materials };
