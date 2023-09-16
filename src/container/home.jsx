import { useState, useEffect } from "react";
import Card from "../components/cards/card";
import "./home.css";
import SearchBar from "../components/Searchbar/search";
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";

const API_URL = "https://api.themoviedb.org/3/movie/top_rated?api_key=33fd96ced5f00da8c763f2214723b0e7";
const API_SEARCH = "https://api.themoviedb.org/3/search/movie/?api_key=33fd96ced5f00da8c763f2214723b0e7&query";
const Home = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setMovies(data.results);
            })
    }, [])


    const searchMovie = async (e) => {
        e.preventDefault();
        console.log("searching");
        try {
            const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=33fd96ced5f00da8c763f2214723b0e7`;
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setMovies(data.results)
        }
        catch (e) {
            console.log(e)
        }
    }

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    return (
        <div className="home">
            <div className="landingPage">
                <SearchBar change={handleChange} query={query} search={searchMovie} />
                <div className="landingContent">
                    <h1>John Wick 3 :<br />Parabellum</h1>
                    <span></span>
                    <p>John Wick is on the run after killing a member of the international assassins` guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
                    <button className="trailerButton">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z" fill="white" />
                        </svg>
                        WATCH TRAILER
                    </button>
                </div>
            </div>

            <div className="movies">
                <div className="movieHeader">
                    <h3>Featured Movies</h3>
                    <p>See More {">"} </p>
                </div>
                <div>
                    {movies.length > 0 ? (
                        <div className="movieCards">
                            {movies.slice(0, 10).map((movieReq) =>
                                <Link style={{ color: "grey" }} to={`/movieItem/${movieReq.id}`} key={movieReq.id}> <Card {...movieReq} /></Link>)}
                        </div>
                    ) : (
                        <h2>Sorry! There are no movies to display</h2>
                    )}
                </div>
            </div>


            <Footer />
        </div>
    )
}


export default Home;
