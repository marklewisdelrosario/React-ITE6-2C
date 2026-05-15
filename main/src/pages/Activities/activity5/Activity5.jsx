import React, { useEffect, useState } from "react";
import "./Activity5.css";
import MovieCard from "../../../components/moviecardAct5/MovieCard";

const Activity5 = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_KEY = "d659a2788f34f4c727285d035fa3590a";

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError("");

      try {
        const [genreRes, movieRes] = await Promise.all([
          fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
          ),
          fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
          ),
        ]);

        if (!genreRes.ok || !movieRes.ok) {
          throw new Error("API Error");
        }

        const genreData = await genreRes.json();
        const movieData = await movieRes.json();

        const genreMap = {};
        (genreData.genres || []).forEach((g) => {
          genreMap[g.id] = g.name;
        });

        setGenres(genreMap);

        setTimeout(() => {
          setMovies(movieData.results || []);
          setLoading(false);
        }, 2000);

      } catch (err) {
        setError("No Internet Connection or API Problem");
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <main className="container">
      <h1 className="headerTitle">TMDB Popular Movies</h1>

      <section className="gallery">
        {loading ? (
          Array.from({ length: 20 }).map((_, i) => (
            <MovieCard key={i} isLoading />
          ))
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} genres={genres} />
          ))
        )}
      </section>
    </main>
  );
};

export default Activity5;