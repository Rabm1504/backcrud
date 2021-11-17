import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory, useParams } from "react-router-dom";

export function EditMovie({ movies, setMovies }) {
  const {id} = useParams();
  const movie = movies[id]
  const [image, setImage] = useState(movie.image);
  const [name, setName] = useState(movie.name);
  const [rating, setRating] = useState(movie.rating);
  const [description, setDescription] = useState(movie.description);
  const [trailer, setTrailer] = useState(movie.trailer);

  const history = useHistory();

  const editMovie = () => {
    const updatedMovie = {
      image,
      name,
      rating,
      description,
      trailer,
    };
    const copyMovies = [...movies];
    copyMovies[id] = updatedMovie;
    setMovies(copyMovies);
    resetForm();
    history.push('/movies');
  };

  const resetForm = () => {
    setImage("");
    setName("");
    setRating("");
    setDescription("");
    setTrailer();
  };

  return <div className='movie-form-lists'>
    <TextField label="Enter Image url" variant="outlined" value={image} onChange={(event) => setImage(event.target.value)} />
    <TextField label="Enter Name" variant="outlined" value={name} onChange={(event) => setName(event.target.value)} />
    <TextField label="Enter Rating" variant="outlined" value={rating} onChange={(event) => setRating(event.target.value)} />
    <TextField label="Enter Description" variant="outlined" value={description} onChange={(event) => setDescription(event.target.value)} />
    <TextField label="Enter Trailer" variant="outlined" value={trailer} onChange={(event) => setTrailer(event.target.value)} />
    <Button color='success' onClick={editMovie} variant="contained">Save</Button>
  </div>;
}
