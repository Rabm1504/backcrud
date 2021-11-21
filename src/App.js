import { useState } from "react";
import "./App.css";
import { MovieList } from "./MovieList";
import { INITIAL_MOVIES } from "./INITIAL_MOVIES";
import Button from '@mui/material/Button';
import { Switch, Route, Redirect, useParams } from "react-router-dom";
import { AddColor } from "./AddColor";
import { useHistory } from "react-router-dom";
import { AddMovie } from "./AddMovie";
import { EditMovie } from "./EditMovie";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function App() {
  const [movies, setMovies] = useState(INITIAL_MOVIES)
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

  const history = useHistory();

  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  })

  const paperStyles = {minHeight: '100vh'}

  return (
    <ThemeProvider theme={theme}>
    <Paper elevation={3} style={paperStyles}>

    <div className="App">
    <AppBar position="static">
        <Toolbar>
          <Button
            onClick = {() => history.push("/") }
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
              Home
          </Button>
          <Button
            onClick = {() => history.push("/movies") }
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          Movies
          </Button>
          <Button
            onClick = {() => history.push("/movies/add-movie") }
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          Add Movies
          </Button>
          <Button
            onClick = {() => history.push("/color-game") }
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          Color Game
          </Button>
          <Button
            style= {{marginLeft: "auto"}}
            onClick = {() => setMode(mode === "light" ? "dark" : "light") }
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            startIcon= {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          >
              {(mode === "light" ? "dark" : "light")} Mode
          </Button>
        </Toolbar>
      </AppBar>

<Switch>
<Route exact path="/">
<h1>Welcome to React (Home of Learners)</h1>
</Route>

<Route path="/films">
  <Redirect to='/movies' />
</Route>

<Route path="/movies/add-movie">
  <AddMovie movies={movies} setMovies={setMovies} />
</Route>

<Route path="/movies/edit/:id">
  <EditMovie movies={movies} setMovies={setMovies} />
</Route>

<Route path="/movies/:id">
  <MovieDetails movies={movies} setMovies={setMovies} />
</Route>

<Route path="/movies">
<MovieList movies={movies} setMovies={setMovies} />
</Route>

<Route path="/color-game">
<AddColor />
</Route>

<Route path="**">
<NotFound />
</Route>
</Switch>

  </div>
  </Paper>
  </ThemeProvider>
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
  const history = useHistory()
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
<Button onClick={() => history.goBack()} variant="contained" style={{margin: '20px'}} >Back</Button>
  </div>
  ) 
}