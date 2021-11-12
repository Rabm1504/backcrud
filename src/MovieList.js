import { Movie } from "./Movie";

export function MovieList({ movies }) {
  return (
    <div className='movie-list'>
      {movies.map(({ image, name, rating, description}, index) => (
        <Movie image={image} name={name} rating={rating} description={description} index={index} />
      ))}
    </div>
  );
}
