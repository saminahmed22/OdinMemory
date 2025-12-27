export default function Card({ name = "Name", image = "Image" }) {
  return (
    <div className={`card_${name} cardDiv`}>
      <div className="imageDiv">
        <img className="image" src={image} alt="Poke Image" />
      </div>
      <div className="nameDiv">{name}</div>
    </div>
  );
}
