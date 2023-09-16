
import "./card.css";
import imdb from "../../assets/imdb.png";
import tomato from "../../assets/tomato.png";

const API_IMG = "https://image.tmdb.org/t/p/w500/";


const genreMap = {
    28: ' Action ',
    12: ' Adventure ',
    16: ' Animation',
    35: ' Comedy ',
    80: ' Crime ',
    99: ' Documentary ',
    18: ' Drama ',
    10751: ' Family, ',
    14: ' Fantasy ',
    36: ' History ',
    27: ' Horror ',
    10402: ' Music ',
    9648: ' Mystery ',
    10749: ' Romance ',
    878: ' Science Fiction ',
    10770: ' TV Movie ',
    53: ' Thriller ',
    10752: ' War ',
    37: ' Western ',
};


const Card = ({ title, poster_path, vote_average, release_date, genre_ids }) => {


    const genreNames = genre_ids.map(
        (genreID) => genreMap[genreID]
    );
    return (
        <div className="card" data-testid="movie-card">
            <img data-testid="movie-poster" src={API_IMG + poster_path} alt="" />
            <div className="cardContent"><svg className="heart" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.17157 5.48284C4.73367 3.96185 7.26633 3.96185 8.82842 5.48284L9.99999 6.62359L11.1716 5.48284C12.7337 3.96185 15.2663 3.96185 16.8284 5.48284C18.3905 7.00383 18.3905 9.46984 16.8284 10.9908L9.99999 17.6396L3.17157 10.9908C1.60948 9.46984 1.60948 7.00383 3.17157 5.48284Z" fill="#D1D5DB" />
            </svg>
                <h6 data-testid="movie-release-date">{release_date}</h6>
                <h4 data-testid="movie-title">{title}</h4>
                <span>
                    <img src={imdb} alt="imdb" />
                    <i></i>
                    <img src={tomato} alt="Rotten-tomato" />
                    <i>{vote_average}</i>
                </span>
                <h6>{genreNames.sort().join(",")}</h6>
            </div>
        </div>
    )
}


export default Card;