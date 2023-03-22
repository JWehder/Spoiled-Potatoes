import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

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
            {displayMovies}
        </div>
    )
}

export default HomePage;