import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

// Axios
import axios from "axios";

// stylesheet
import "./style/MovieDetails.scss";

const MovieDetails = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const API_KEY = "0f9f81735caa1b89545e34a598f8d5bc";
  const params = useParams();
  const getMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&language=en-US`
      )
      .then((res) => {
        setData(res.data);
        console.log(res);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        console.error("Error fetching movie data:", error);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <section className="movie_details">
      <>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <h3>{error}</h3>
        ) : (
          <div className="movie_content">
            <img
              src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
              alt=""
            />
            <h1 data-testid="movie-title">{data.original_title}</h1>
            <h3 data-testid="movie-release-date">
              Release date: {data.release_date}
            </h3>
            <span data-testid="movie-runtime">
              Runtime: {data.runtime} minutes
            </span>
            <span>Overview:</span>
            <p data-testid="movie-overview">{data.overview}</p>
          </div>
        )}
      </>
    </section>
  );
};

export default MovieDetails;
