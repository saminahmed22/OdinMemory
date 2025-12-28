import Card from "./Card";
import { useState, useEffect } from "react";

function scrambleCards(arr, setCardsArr) {
  const shuffled = structuredClone(arr);

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomNum = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[randomNum]] = [shuffled[randomNum], shuffled[i]];
  }

  setCardsArr(shuffled);
}

export default function Cards({ scores, setScores }) {
  const [cardsArrInit, setCardsArrInit] = useState([]);
  const [cardsArr, setCardsArr] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const promises = [];
      for (let i = 1; i < 13; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        const response = await fetch(url);
        let result = await response.json();
        promises.push({
          key: i + 1,
          image: result.sprites.front_default,
          name:
            String(result.name).charAt(0).toUpperCase() +
            String(result.name).slice(1),
          clicked: false,
        });
      }
      setCardsArrInit(structuredClone(promises));
      setCardsArr(structuredClone(promises));
    };
    fetchPokemons();
  }, []);

  return (
    <div className="cardsContainer">
      {cardsArr.map((card, index) => (
        <Card
          key={index}
          name={card.name}
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
