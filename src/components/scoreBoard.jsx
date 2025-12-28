export default function ScoreBoard({ scores }) {
  return (
    <div className="scoreBoard">
      <div className="highestScore">Highest Score: {scores.highestScore}</div>
      <div className="currentScore">Score: {scores.currentScore}</div>
    </div>
  );
}
