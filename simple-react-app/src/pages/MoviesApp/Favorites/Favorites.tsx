import "./Favorites.css";
import { useMovieFavoritesContext } from "../../../contexts/MoviesApp/MovieFavoritesContext";
import MoviesGrid from "../../../components/MoviesApp/MoviesGrid/MoviesGrid";

export default function Favorites() {
  const { favorites } = useMovieFavoritesContext();

  return (
    <div className="favorites">
      <h2>Favorite movies</h2>
      <div className="favorites-list">
        {favorites.length === 0 && (
          <div className="favorites-empty">
            <h3>No favorite movies yet</h3>
          </div>
        )}
        {favorites.length > 0 && <MoviesGrid movies={favorites} />}
      </div>
    </div>
  );
}
