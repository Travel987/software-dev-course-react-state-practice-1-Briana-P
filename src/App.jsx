import { useState } from "react";
import GenreList from "./components/GenreList";
import MovieList from "./components/MovieList";
import { genres } from "./mock-data/genres";
import { movies } from "./mock-data/movies";

import "./App.css";

function App() {
	const [currentGenre, setCurrentGenre] = useState(genres[0].name);
	return (
  <div>
    <h1>Movie App</h1>
	
    <GenreList
      genres={genres}
      currentGenre={currentGenre}
      setCurrentGenre={setCurrentGenre}
    />

    <MovieList
      movies={movies}
      currentGenre={currentGenre}
    />
  </div>
);
}

export default App;
