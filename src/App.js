import { useState } from "react";
import "./App.css";
import { MovieList } from "./MovieList";
import { INITIAL_MOVIES } from "./INITIAL_MOVIES";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Switch, Route, Link, Redirect, useParams } from "react-router-dom";
import { AddColor } from "./AddColor";

export default function App() {
  const users = [
    {
      name: "Jayesh",
      pic:
        "https://asset.swarovski.com/images/$size_1000/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5379499_png/star-wars---darth-vader-swarovski-5379499.png"
    },
    {
      name: "Dev",
      pic:
        "https://lumiere-a.akamaihd.net/v1/images/607598d0230e6a00018e21b2-image_354b1b56.jpeg?region=0%2C48%2C1536%2C768&width=960"
    }
  ];

  const [movies, setMovies] = useState(INITIAL_MOVIES)

  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');

  const resetForm = () => {
    setImage("");
    setName("");
    setRating("");
    setDescription("");
  }

const addMovie = () => {
  const newMovie = {
    image,
    name,
    rating,
    description,
  }
    setMovies([...movies, newMovie]);
    resetForm();
}

  return (
    <div className="App">
<ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/color-game">Color Game</Link>
        </li>
</ul>

      {/* {users.map(({ pic, name }) => (
        <Msg name={name} pic={pic} />
      ))} */}

    {/* <AddColor /> */}

<Switch>
<Route exact path="/">
<h1>Welcome to React (Home of Learners)</h1>
</Route>

<Route path="/films">
  <Redirect to='/movies' />
</Route>

<Route path="/movies/:id">
  <MovieDetails movies={movies} />
</Route>

<Route path="/movies">
  <div className='movie-form-lists'>
<TextField label="Enter Image url" variant="outlined" value={image} onChange={(event) => setImage(event.target.value) } />
<TextField label="Enter Name" variant="outlined" value={name} onChange={(event) => setName(event.target.value) } />
<TextField label="Enter Rating" variant="outlined" value={rating} onChange={(event) => setRating(event.target.value) } />
<TextField label="Enter Description" variant="outlined" value={description} onChange={(event) => setDescription(event.target.value) } />
<Button onClick={addMovie} variant="contained">Add Movie</Button>
  </div>
<MovieList movies={movies} />
</Route>

<Route path="/color-game">
<AddColor />
</Route>

<Route path="**">
<NotFound />
</Route>
</Switch>

  </div>
  );
}

function NotFound() {
  const styles = {width: '100%', objectFit: 'cover'}
  return (
    <img style={styles} src='https://www.figmints.com/wp-content/uploads/2019/09/image16.gif' alt="" />
  ) 
}

function MovieDetails({movies}) {
  const {id} = useParams();
  const movie = movies[id];
  return (
  <div>
<iframe
  width="100%"
  height="570"
  src={movie.trailer}
  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>

<div className="movie-detail-container">
<div className="movie-specs">
  <h3 className="movie-name">{movie.name}</h3>
  <p className="movie-rating">{movie.rating}</p>
</div>

{/* Conditional styling */}
<p>{movie.description}</p>
</div>
  </div>
  ) 
}