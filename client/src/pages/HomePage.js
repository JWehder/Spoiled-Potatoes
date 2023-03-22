import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NewsPane from "../components/NewsPane";
import MovieContainer from "../styles/MovieContainer";

function HomePage() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('/movies')
        .then((resp) => resp.json())
        .then((movies) => setMovies(movies))
    }, [])

    const displayMovies = movies.map((movie) => {
        return <MovieCard title={movie.title} poster={movie.poster} key={movie.title} />
    })

    return (
        <div>
            <NewsPane />
            <MovieContainer>
                {displayMovies}
            </MovieContainer>
        </div>
    )
}

export default HomePage;