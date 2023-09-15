import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Axios
import axios from "axios";

const MovieDetails = () => {
  const [data, setData] = useState([]);
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
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
            alt=""
          />
          <p>{data.original_title}</p>
          <p>{data.release_date}</p>
          <p>{data.runtime}</p>
          <p>{data.overview}</p>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
