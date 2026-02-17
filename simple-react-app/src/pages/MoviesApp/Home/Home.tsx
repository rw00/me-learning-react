import { useEffect, useState } from "react";
import MovieCard from "../../../components/MoviesApp/MovieCard";
import type { Movie } from "../../../types/MoviesApp/Movie";
import {
  getPopularMovies,
  searchMovies
} from "../../../services/MoviesApp/Api";
import "./Home.css";
import MoviesGrid from "../../../components/MoviesApp/MoviesGrid/MoviesGrid";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    getPopularMovies()
      .then((movies) => {
        setMovies(movies);
        setError("");
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);
    searchMovies(searchQuery)
      .then((movies) => {
        setMovies(movies);
        setError("");
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  };

  return (
    <div className="home">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Search movies"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button" disabled={loading}>
          Search
        </button>
      </form>
      {loading && <div className="loading">Loading...</div>}
      {error && <p className="error">{error}</p>}
      <MoviesGrid movies={movies} />
    </div>
  );
}
