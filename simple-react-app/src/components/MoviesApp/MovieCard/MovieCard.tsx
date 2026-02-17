import "./MovieCard.css";
import type { Movie } from "../../../types/MoviesApp/Movie";
import { useMovieFavoritesContext } from "../../../contexts/MoviesApp/MovieFavoritesContext";
import type { MouseEvent } from "react";

interface Props {
  readonly movie: Movie;
}

export default function MovieCard({ movie }: Props) {
  const { isFavorite, addFavorite, removeFavorite } =
    useMovieFavoritesContext();

  const onFavoriteClick = (e: MouseEvent) => {
    e.preventDefault();
    if (isFavorite(movie.id)) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title + " movie poster"}
        />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            {isFavorite(movie.id) ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}
