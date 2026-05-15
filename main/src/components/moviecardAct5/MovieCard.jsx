import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie, genres, isLoading }) => {
  if (isLoading) {
    return (
      <div className="card skeleton">
        <div className="posterSkeleton"></div>
        <div className="textSkeleton title"></div>
        <div className="textSkeleton date"></div>
        <div className="textSkeleton genSum"></div>
        <div className="textSkeleton genSum"></div>
      </div>
    );
  }

  const movieGenres =
    movie?.genre_ids?.map((id) => genres?.[id]).filter(Boolean) || [];

  return (
    <div className="card">
      {movie?.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      ) : (
        <div className="noImage">No Image</div>
      )}

      <div className="cardContent">
        <h2 className="cardTitle">{movie?.title}</h2>

        <p className="cardDate">{movie?.release_date}</p>

        <div className="genres">
          {movieGenres.map((g, i) => (
            <span key={i} className="genreTag">
              {g}
            </span>
          ))}
        </div>

        <p className="cardOverview">{movie?.overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;