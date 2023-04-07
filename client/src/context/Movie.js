import React, { createContext, useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { Form } from "react-bootstrap"

const MovieContext = createContext();

function MovieProvider({ children }) {
    const [movies, setMovies] = useState([])
    const [currentMovies, setCurrentMovies] = useState([])

    useEffect(() => {
        fetch('/movies')
        .then((resp) => resp.json())
        .then((movies) => setMovies(movies))
    }, [])

    const drama = movies.filter((movie) => movie.determine_category === "Drama")
    const doc = movies.filter((movie) => movie.determine_category === "Documentary")
    const comedy = movies.filter((movie) => movie.determine_category === "Comedy")

    const displayMovies = movies.map((movie) => {
        return <MovieCard overall_rating= {movie.overall_rating} id={movie.id} title={movie.title} poster={movie.poster} key={movie.title} />
    })

    const displayCurrentMovies = currentMovies.map((movie) => {
        return <MovieCard id={movie.id} title={movie.title} poster={movie.poster} key={movie.title} />
    })

    function updateMovie(updatedMovie) {
        setMovies((movies) => movies.map((movie) => movie.id === updatedMovie.id ? updatedMovie : movie))
    }

    const displayErrors = (errors, errorKey = null) => {
        return errors.map((error) => {
            if (errorKey === "password" && error === "is invalid") {
                error = "Sorry, your password is invalid. Your password must be at least 8 characters, contain at least one digit, at least one lowercase letter, one uppercase letter, and a special character (! @ # $ % ^ &)"
            } else if (errorKey === "email" && error === "is invalid") {
                error = "Please follow typical email formatting: joe@email.com"
            }
            return ( 
            <Form.Control.Feedback type="invalid">
            {error}
            </Form.Control.Feedback>
            );
        })
    }
    
    return <MovieContext.Provider value={{ displayMovies, movies, setMovies, updateMovie, currentMovies, setCurrentMovies, displayCurrentMovies, displayErrors, drama, comedy, doc }}>{children}</MovieContext.Provider>;
}

export { MovieProvider, MovieContext }