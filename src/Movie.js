import { useState } from "react";
import { Counter } from "./Counter";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

export function Movie({ image, name, rating, description }) {
  const [show, setShow] = useState(true);
  const styles = {display: show ? 'block' : 'none'}
  return (
    <Card className="movie-container">
      <img className="movie-poster" src={image} alt="" />
      <CardContent>
      <div className="movie-specs">
        <h3 className="movie-name">{name}</h3>
        <p className="movie-rating">{rating}</p>
      </div>
      </CardContent>
      <Button onClick={() => setShow(!show)} style={{marginBottom: '20px'}} variant="contained">{show ? 'Hide' : 'Show'} Description</Button>  
      {/* Conditional styling */}
      <p style={styles}>{description}</p>

      {/* Conditional Rendering */}
      {/* {show ? <p>{description}</p> : ""} */}
      <CardActions>
      <Counter />
      </ CardActions>
    </Card>
  );
}
