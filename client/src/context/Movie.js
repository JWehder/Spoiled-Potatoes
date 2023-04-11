import React, { createContext, useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { Form } from "react-bootstrap"

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
        return <MovieCard id={movie.id} title={movie.title} poster={movie.poster} key={movie.title} />
    })

    function updateMovie(updatedMovie) {
        setMovies((movies) => movies.map((movie) => movie.id === updatedMovie.id ? updatedMovie : movie))
    }

    const displayErrors = (errors, errorKey = null) => {
        return errors.map((error) => {
            if (errorKey === "password" && error === "is invalid") {
                error = "Sorry, your password is invalid. Your password must contain at least one digit, at least one lowercase letter, one uppercase letter, and one special character (! @ # $ % ^ &)"
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
    
    return <MovieContext.Provider value={{ movies, setMovies, updateMovie, currentMovies, setCurrentMovies, displayCurrentMovies, displayErrors, isLoading }}>{children}</MovieContext.Provider>;
}

export { MovieProvider, MovieContext }