// stylesheet
import "./style/TopMovies.scss";

// Axios
import Axios from "axios";

// Images
import Poster from "../../../../assets/Poster.png";
import { useState, useEffect } from "react";
import axios from "axios";

const TopMovies = () => {
  const API_KEY = "0f9f81735caa1b89545e34a598f8d5bc";
  const [data, setData] = useState([]);

  const getMovies = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
      .then((res) => {
        setData(res.data.results);
        console.log(res.data.results);
      });
  };
  useEffect(() => {
    getMovies();
  }, []);
  const topMoviesData = data.slice(0,10)
  return (
    <div className="top_movies">
      <h1>Top Movies</h1>
      <div className="top_movies_content">
        {topMoviesData.map((data) => (
          <div className="movies_card" data-testid="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
              alt="Poster"
              data-testid="movie-poster"
            />
            <div className="movies_details">
              <h1 data-testid="movie-title">{data.original_title}</h1>
              <p data-testid="movie-release-date">{data.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopMovies;
