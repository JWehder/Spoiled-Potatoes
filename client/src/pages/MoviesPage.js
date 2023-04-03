import React, { useContext } from "react";
import { MovieContext } from "../context/Movie";
import { Route, useRouteMatch } from "react-router-dom";
import Navigation from "../components/Nav";
import MovieInfo from "../components/MovieInfo";
import styled from "styled-components";

function MoviesPage() {
    const { displayMovies, movies } = useContext(MovieContext)
    const match = useRouteMatch();
    
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