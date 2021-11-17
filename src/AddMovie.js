import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";

export function AddMovie({ movies, setMovies }) {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  const [trailer, setTrailer] = useState('');

  const history = useHistory();

  const addMovie = () => {
    const newMovie = {
      image,
      name,
      rating,
      description,
      trailer,
    };
    setMovies([...movies, newMovie]);
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
    <Button onClick={addMovie} variant="contained">Add Movie</Button>
  </div>;
}
