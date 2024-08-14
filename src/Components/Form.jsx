import React, { useState } from "react";
import Card from "./Card";
import FormStyles from "../Styles/Form.module.css"

function Form() {
  const [song, setSong] = useState({
    name: "",
    artist: "",
    genre: "",
    year: "",
  });
  const [cart, setCart] = useState(false);
  const [error, setError] = useState(false);
  const nameValidate = song.name.trim().length > 3;
  const nameRegex = /^[a-zA-Z]*$/;
  const artistValidate = song.artist.trim().length > 6;
  const genreValidate = song.genre.trim().length > 2;
  const yeartValidate = song.year.trim().length > 3;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSong({
      ...song,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameValidate && nameRegex.test(song.name) && artistValidate && genreValidate && yeartValidate) {
      setCart(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      {cart ? (
        <Card song ={song}/>
      ) : (
        <form className={FormStyles.formContainer} onSubmit={handleSubmit}>
          <h3>Ingresa un artista</h3>
          <div>
            <label>Nombre de la canción: </label>
            <input
              type="text"
              name="name"
              value={song.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Artista/Banda: </label>
            <input
              type="text"
              name="artist"
              value={song.artist}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Género musical: </label>
            <select name="genre" value={song.genre} onChange={handleChange}>
              <option value="">Seleccionar género</option>
              <option value="Pop">Pop</option>
              <option value="Rock">Rock</option>
              <option value="Jazz">Jazz</option>
            </select>
          </div>
          <div>
            <label>Año de lanzamiento: </label>
            <input
              type="number"
              name="year"
              value={song.year}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      )}
      {error ? (
        <h4 style={{ color: "red" }}>Por favor chequea que la información sea correcta</h4>
      ) : null}
    </>
  );
}

export default Form;
