// stylesheet
import "./style/TopMovies.scss";

// Images
import Poster from "./images/Poster.png";

const TopMovies = () => {
  return (
    <div className="top_movies">
        <h1>Top Movies</h1>
        <div className="top_movies_content">
            <div className="movies_card">
                <img src={Poster} alt="Poster" />
                <div className="movies_details">
                    <h1>Stranger Things</h1>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopMovies