import CardStyles from "../Styles/Card.module.css";

function Card({ song }) {
  const {name, artist, genre, year} = song;
    return (
      <div className={CardStyles.cardContainer}>
        <h2>{name}</h2>
        <p><strong>Artista/Banda:</strong> {artist}</p>
        <p><strong>Género:</strong> {genre}</p>
        <p><strong>Año de lanzamiento:</strong> {year}</p>
      </div>
    );
  }
  
  export default Card;