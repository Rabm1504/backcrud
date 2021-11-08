import { Movie } from "./Movie";

export function MovieList({ movies }) {
  return (
    <div className='movie-list'>
      {movies.map(({ image, name, rating, discription }) => (
        <Movie image={image} name={name} rating={rating} discription={discription} />
      ))}
    </div>
  );
}
