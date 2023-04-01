import React, { useContext } from "react";
import { MovieContext } from "../context/Movie";
import { Route, useRouteMatch, Redirect } from "react-router-dom";
import Navigation from "../components/Nav";
import MovieInfo from "../components/MovieInfo";
import styled from "styled-components";

function MoviesPage() {
    const { displayMovies, isSubmitted } = useContext(MovieContext)
    const match = useRouteMatch();

    if (isSubmitted) return <Redirect to="/movies" />

    
    return (
            <div style={{ width: '900px', margin: '0 auto', backgroundColor: 'white'}}>
                <Navigation />
                <MovieContainer>
                <Route exact path={match.url}>
                    {displayMovies} 
                </Route>
                <Route exact path='/movies/:movieId'>
                    <MovieInfo />
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