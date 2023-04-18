import React, { useContext } from "react";
import { MovieContext } from "../context/Movie";
import { Route, useRouteMatch, Redirect } from "react-router-dom";
import Navigation from "../components/Nav";
import MovieInfo from "../components/MovieInfo";
import styled from "styled-components";
import { UserContext } from "../context/User";
import CreateMovieForm from "../components/CreateMovieForm";
import MovieCard from "../components/MovieCard";

function MoviesPage() {
    const { movies, displayCurrentMovies, currentMovies } = useContext(MovieContext)
    const { user } = useContext(UserContext)
    const match = useRouteMatch();

    const displayMovies = movies.map((movie) => {
        return <MovieCard overall_rating={movie.overall_rating} id={movie.id} title={movie.title} poster={movie.poster} key={movie.title} />
    })

    if (!user) return <Redirect to="/login" />
    
    return (
            <div style={{ width: '900px', margin: '0 auto', backgroundColor: 'white'}}>
                <Navigation /> 
                {movies.length ? "" : <h2 style={{marginTop: '100px', textAlign: 'center'}}>Sorry, we couldn't find the movie you are looking for</h2>}
                <MovieContainer>
                <Route exact path={match.url}>
                    {displayMovies} 
                </Route>
                </MovieContainer>
                <Route exact path='/movies/:movieId'>
                    <MovieInfo />
                </Route>
                <MovieContainer>
                <Route exact path='/movies/search_results/:value'>
                    {currentMovies.length ? displayCurrentMovies : 
                    <h2 style={{marginTop: '100px', textAlign: 'center'}}>Sorry, we couldn't find the movie you are looking for</h2>}
                </Route>
                </MovieContainer>
                <MovieContainer>
                <Route exact path='/movies/create_movie'>
                    <CreateMovieForm />
                </Route>
                </MovieContainer>
                
                
            </div>
    )
}

const MovieContainer = styled.div`
    display: flex;
    justify-content: center;
    max-width: 900px;
    flex-wrap: wrap;
`

export default MoviesPage;