function MovieList({ movies, currentGenre }) {
  const filteredMovies = movies.filter(
    (movie) => movie.genre === currentGenre
  );

  return (
    <div>
      <h2>Movies</h2>

      {filteredMovies.map((movie) => (
        <p key={movie.title}>{movie.title}</p>
      ))}
    </div>
  );
}

export default MovieList;