import { createContext, useState, useContext, useEffect, useMemo } from "react";
import type { Movie } from "../../types/MoviesApp/Movie";

interface Props {
  favorites: Movie[];
  readonly addFavorite: (movie: Movie) => void;
  readonly removeFavorite: (movieId: string) => void;
  readonly isFavorite: (movieId: string) => boolean;
}

const MovieFavoritesContext = createContext<Props>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  isFavorite: () => false
});

export const useMovieFavoritesContext = () => useContext(MovieFavoritesContext);

export const MovieFavoritesProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  useEffect(() => {
    const storedFavorites = localStorage.getItem("movies-app.favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("movies-app.favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movie: Movie) => {
    setFavorites((prev) => [...prev, movie]);
  };
  const removeFavorite = (movieId: string) => {
    setFavorites((prev) => prev.filter((m) => m.id !== movieId));
  };
  const isFavorite = (movieId: string) => {
    return favorites.some((m) => m.id === movieId);
  };

  const value = useMemo(
    () => ({
      favorites,
      addFavorite,
      removeFavorite,
      isFavorite
    }),
    [favorites]
  );

  return (
    <MovieFavoritesContext.Provider value={value}>
      {children}
    </MovieFavoritesContext.Provider>
  );
};
