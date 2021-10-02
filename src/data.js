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
    ["Ohromující výkon", "Akorát že vůbec"]
  ]
};
const textsLength = texts.values.length;
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

export { texts, locations, textsLength };
