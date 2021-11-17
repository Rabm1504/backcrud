import { IconButton } from "@mui/material";
import { Movie } from "./Movie";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from "react-router-dom";

export function MovieList({ movies, setMovies }) {
  const history = useHistory();
  const deleteMovies = (index) => {
    const removeMovieIndex = index;
    const remainingMovie = movies.filter((mv, idx) => 
      idx !== removeMovieIndex
    );
      setMovies(remainingMovie)
  };

  return (
    <div className='movie-list'>
      {movies.map(({ image, name, rating, description}, index) => (
        <Movie image={image} name={name} rating={rating} description={description} index={index}
        deleteButton={
          <IconButton color='error' onClick={
            () => deleteMovies(index) }>
            <DeleteIcon />
          </IconButton>
        }
        updateButton={
          <IconButton color='secondary' onClick={
            () => history.push('/movies/edit/' + index) }>
            <EditIcon />
          </IconButton>
        }/>
      ))}
    </div>
  );
}
