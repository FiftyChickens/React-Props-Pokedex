function Pokecard({ id, name, type, experience }) {
  return (
    <div className="cardContent">
      <h2>{name}</h2>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        width="120px"
        high="120px"
      ></img>
      <p>Type: {type}</p>
      <p>EXP: {experience}</p>
    </div>
  );
}
