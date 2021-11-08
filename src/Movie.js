import { useState } from "react";
import { Counter } from "./Counter";

export function Movie({ image, name, rating, discription }) {
  const [show, setShow] = useState(true);
  const styles = {display: show ? 'block' : 'none'}
  return (
    <div className="movie-container">
      <img className="movie-poster" src={image} alt="" />

      <div className="movie-specs">
        <h3 className="movie-name">{name}</h3>
        <p className="movie-rating">{rating}</p>
      </div>

      <button onClick={() => setShow(!show)} style={{marginBottom: '20px'}}>{show ? 'Hide' : 'Show'} Discription</button>
      {/* Conditional styling */}
      {/* <p style={styles}>{discription}</p> */}

      {/* Conditional Rendering */}
      {show ? <p>{discription}</p> : ""}
      <Counter />
    </div>
  );
}
