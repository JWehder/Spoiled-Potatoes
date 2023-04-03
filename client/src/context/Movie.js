import React, { createContext, useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const MovieContext = createContext();

function MovieProvider({ children }) {
    const [movies, setMovies] = useState([])
    const [currentMovies, setCurrentMovies] = useState([])

    useEffect(() => {
        fetch('/movies')
        .then((resp) => resp.json())
        .then((movies) => setMovies(movies))
    }, [])

    const displayMovies = movies.map((movie) => {
        return <MovieCard id={movie.id} title={movie.title} poster={movie.poster} key={movie.title} />
    })

    function updateMovie(updatedMovie) {
        setMovies((movies) => movies.map((movie) => movie.id === updatedMovie.id ? updatedMovie : movie))
    }
    
    return <MovieContext.Provider value={{ displayMovies, movies, setMovies, updateMovie, currentMovies, setCurrentMovies }}>{children}</MovieContext.Provider>;
}

export { MovieProvider, MovieContext }