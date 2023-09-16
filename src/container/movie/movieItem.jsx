import tv from "../../assets/tv.png";
import tvShow from "../../assets/TV Show.png";
import Projector from "../../assets/Projector.png";
import calendar from "../../assets/Calendar.png";
import home from "../../assets/Home.png";
import list from "../../assets/List.png";
import tickets from "../../assets/Two Tickets.png";
import Rectangle from "../../assets/Rectangle.png";
import logout from "../../assets/Logout.png";

import "./movieItem.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";



const MovieItem = () => {
    const [movie, setMovie] = useState({})
    const API_IMG = "https://image.tmdb.org/t/p/w500/";
    const { id } = useParams();

    const API_URL = "https://api.themoviedb.org/3/movie/top_rated?api_key=33fd96ced5f00da8c763f2214723b0e7";
    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then(data => {
                console.log(data.results);
                // console.log(id)
                const matchingMovie = data.results.find((movie) => movie.id == id);
                setMovie(matchingMovie);
                console.log(matchingMovie);

            })
    }, [id])


    return (
        <div className="movieItem">
            <div className="sideBar">
                <div className="logo">
                    <img src={tv} alt="tv" />
                    <p>MovieBox</p>
                </div>
                <ul className="navList">
                    <li><img src={home} alt="homeIcon" />Home</li>
                    <li><img src={Projector} alt="projector" />Movies</li>
                    <li><img src={tvShow} alt="tvShow" />TV Series</li>
                    <li><img src={calendar} alt="calendar" />Upcoming</li>
                </ul>
                <div className="playMovies">
                    <h5>Play movie quizes
                        and earn
                        free tickets</h5>
                    <p>50k people are playing now</p>
                    <button>Start Playing</button>
                </div>
                <span className="logOut">
                    <img src={logout} alt="logout" />
                    <p>Log out</p>
                </span>
            </div>
            <div className="NowPlaying">
                <img className="playingVid" src={API_IMG + movie.backdrop_path} alt="backdrop" />
                <div className="playingVidDetails">
                    <div className="movieTitle">
                        <h4 data-testid="movie-title">{movie?.title}</h4>
                        <h4 data-testid="movie-release-date">{movie?.release_date}</h4>
                        <h4 data-testid="movie-runtime">duration</h4>
                        <h6>{movie.genre_ids}</h6>
                    </div>
                    <div>
                        {movie.vote_average}
                    </div>
                </div>
                <div className="movieDetails">
                    <div className="movieDetailsLeft">
                        <p data-testid="movie-overview" className="description">{movie?.overview}</p>
                        <span>
                            <p>Director</p>:
                            <p>Joseph Kosinki</p>
                        </span>
                        <span>
                            <p>Writers</p>:
                            <p>writers</p>
                        </span>
                        <span>
                            <p>Stars</p>:
                            <p>stars</p>
                        </span>
                        <div className="topRated">
                            <button>Top rated movie #65</button>
                            <select name="" id="">
                                <option value=""></option>
                            </select>
                        </div>

                    </div>
                    <div className="movieDetailsRight">
                        <button><img src={tickets} alt="" />see show time</button>
                        <button><img src={list} alt="" />More watch options</button>
                        <img src={Rectangle} alt="" />
                        <span>
                            <img src="https://s3-alpha-sig.figma.com/img/ec24/a53b/7f0304a03993570018dab5c8d7d0b360?Expires=1695600000&Signature=Emgrq2m1BlW0suGo230Hybj9Oggjs6Rt6pnU1VeV4JyCp2n1BNonImkUy6AUX5eL9vCeTNhIpUCngAc4J4szgr-0TIe2ontbHgFgexJqUuIuZNGwWXBEYFOdpsm9K4oKvnnowV~zdGbREvdGS4YisjC8el9n6~jK30tKVmGdyDQU9eV~3bqzLKzlHwsm~Ix36pJ~9kOj6LQa0H0~HIb5njfcnkFvmLg~k2458w7dsMdiRZiNorHPjc5g2IyEaNTs5-3QUZzbiWEXpFzybOmKRQ7sRpNC4I9XKsnQjwHwv7rER4IKtaDoApBE9mIBrzuUQfgASIfZaodQfFBu9jDisA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="list" />
                            <p>The Best movies and shows this december</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MovieItem;