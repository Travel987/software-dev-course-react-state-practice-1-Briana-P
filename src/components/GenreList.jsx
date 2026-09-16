function GenreList({ genres, currentGenre, setCurrentGenre }) {
    return (
        <div>
        <h2>Genres</h2>

        {genres.map((genre) => (
            <button
            key={genre.id}
            onClick={() => setCurrentGenre(genre.name)}
            >
                {genre.name}
            </button>

        ))}
        </div>
    );
    

}

export default GenreList;