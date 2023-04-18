import React, { createContext, useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const MovieContext = createContext();

function MovieProvider({ children }) {
    const [movies, setMovies] = useState([])
    const [currentMovies, setCurrentMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('/movies')
        .then((resp) => resp.json())
        .then((movies) => {
            setMovies(movies)
            setIsLoading(false)
        })
    }, [])

    const displayCurrentMovies = currentMovies.map((movie) => {
        return <MovieCard overall_rating={movie.overall_rating} id={movie.id} title={movie.title} poster={movie.poster} key={movie.title} />
    })

    function updateMovie(updatedMovie) {
        setMovies((movies) => movies.map((movie) => movie.id === updatedMovie.id ? updatedMovie : movie))
    }
    
    return <MovieContext.Provider value={{ movies, setMovies, updateMovie, currentMovies, setCurrentMovies, displayCurrentMovies, isLoading }}>{children}</MovieContext.Provider>;
}

export { MovieProvider, MovieContext }