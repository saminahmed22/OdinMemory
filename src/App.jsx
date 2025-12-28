import Cards from "./components/Cards";
import ScoreBoard from "./components/scoreBoard";
import { useState } from "react";

export default function App() {
  const [scores, setScores] = useState({ currentScore: 0, highestScore: 0 });
  return (
    <div>
      <ScoreBoard scores={scores}></ScoreBoard>
      <Cards scores={scores} setScores={setScores}></Cards>
    </div>
  );
}
