import type { Movie } from "../../../types/MoviesApp/Movie";
import MovieCard from "../MovieCard";
import "./MoviesGrid.css";

interface Props {
  movies: Movie[];
}

export default function MoviesGrid({ movies }: Props) {
  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
