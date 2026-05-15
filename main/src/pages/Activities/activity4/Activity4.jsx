import { useEffect, useState } from "react";
import Movie from "../../../components/moviecardAct4/Movie";
import "../../../components/moviecardAct4/Movie.css";

const Activity4 = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/movies.json");
        const result = await response.json();
        setMovieList(result.movie_list);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="container">
      <h1 className="title">Movie List</h1>
      
      <div className="movie-container">
        <div className="movie-list">
          {movieList.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Activity4;