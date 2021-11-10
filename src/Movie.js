import { useState } from "react";
import { Counter } from "./Counter";
import Button from '@mui/material/Button';

export function Movie({ image, name, rating, description }) {
  const [show, setShow] = useState(true);
  const styles = {display: show ? 'block' : 'none'}
  return (
    <div className="movie-container">
      <img className="movie-poster" src={image} alt="" />

      <div className="movie-specs">
        <h3 className="movie-name">{name}</h3>
        <p className="movie-rating">{rating}</p>
      </div>

      <Button onClick={() => setShow(!show)} style={{marginBottom: '20px'}} variant="contained">{show ? 'Hide' : 'Show'} Description</Button>
      {/* Conditional styling */}
      <p style={styles}>{description}</p>

      {/* Conditional Rendering */}
      {/* {show ? <p>{description}</p> : ""} */}
      <Counter />
    </div>
  );
}
