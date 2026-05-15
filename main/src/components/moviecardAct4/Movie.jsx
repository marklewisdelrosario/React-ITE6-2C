const Movie = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} />
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>Year: {movie.year}</p>
        <p>Genre: {movie.genre}</p>
      </div>
    </div>
  );
};

export default Movie;