export default function Card({ name, image, handleClick }) {
  return (
    <div className={`card_${name} cardDiv`} onClick={handleClick}>
      <div className="imageDiv">
        <img className="image" src={image} alt="Poke Image" />
      </div>
      <div className="nameDiv">{name}</div>
    </div>
  );
}
