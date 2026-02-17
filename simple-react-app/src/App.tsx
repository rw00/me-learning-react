import "./App.css";
import Home from "./pages/MoviesApp/Home";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/MoviesApp/Favorites";
import NavBar from "./components/MoviesApp/NavBar";
import { MovieFavoritesProvider } from "./contexts/MoviesApp/MovieFavoritesContext";

function App() {
  return (
    <MovieFavoritesProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieFavoritesProvider>
  );
}

export default App;
