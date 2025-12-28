import Card from "./Card";
import { useState } from "react";

const cardsArrInit = [
  {
    key: 1,
    image: "./src/assets/image/poke.jpg",
    name: "Bulbasaur",
    clicked: false,
  },
  {
    key: 2,
    image: "./src/assets/image/poke2.jpg",
    name: "Bulbasaur",
    clicked: false,
  },
  {
    key: 3,
    image: "./src/assets/image/poke3.jpg",
    name: "Bulbasaur",
    clicked: false,
  },
  {
    key: 4,
    image: "./src/assets/image/poke4.jpg",
    name: "Bulbasaur",
    clicked: false,
  },
  {
    key: 5,
    image: "./src/assets/image/poke5.jpg",
    name: "Bulbasaur",
    clicked: false,
  },
  {
    key: 6,
    image: "./src/assets/image/poke.jpg",
    name: "Bulbasaur",
    clicked: false,
  },
  {
    key: 7,
    image: "./src/assets/image/poke2.jpg",
    name: "Bulbasaur",
    clicked: false,
  },
  {
    key: 8,
    image: "./src/assets/image/poke4.jpg",
    name: "Bulbasaur",
    clicked: false,
  },
  {
    key: 9,
    image: "./src/assets/image/poke3.jpg",
    name: "Bulbasaur",
    clicked: false,
  },
  {
    key: 10,
    image: "./src/assets/image/poke5.jpg",
    name: "Bulbasaur",
    clicked: false,
  },
  {
    key: 11,
    image: "./src/assets/image/poke2.jpg",
    name: "Bulbasaur",
    clicked: false,
  },
  {
    key: 12,
    image: "./src/assets/image/poke.jpg",
    name: "Bulbasaur",
    clicked: false,
  },
];

function scrambleCards(arr, setCardsArr) {
  const shuffled = structuredClone(arr);

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomNum = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[randomNum]] = [shuffled[randomNum], shuffled[i]];
  }

  setCardsArr(shuffled);
}

export default function Cards({ scores, setScores }) {
  const [cardsArr, setCardsArr] = useState(structuredClone(cardsArrInit));

  return (
    <div className="cardsContainer">
      {cardsArr.map((card, index) => (
        <Card
          key={index}
          name={card.key}
          image={card.image}
          handleClick={() => {
            if (!card.clicked) {
              card.clicked = true;
              scrambleCards(cardsArr, setCardsArr);
              setScores((prev) => ({
                ...prev,
                currentScore: prev.currentScore + 1,
              }));
            } else {
              setCardsArr(structuredClone(cardsArrInit));

              if (scores.currentScore > scores.highestScore) {
                setScores((prev) => ({
                  ...prev,
                  highestScore: prev.currentScore,
                }));
              }
              setScores((prev) => ({
                ...prev,
                currentScore: 0,
              }));
            }
          }}
        ></Card>
      ))}
    </div>
  );
}
