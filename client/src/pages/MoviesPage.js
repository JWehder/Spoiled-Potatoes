import React, { useContext } from "react";
import { MovieContext } from "../context/Movie";
import { Route, useRouteMatch } from "react-router-dom";
import Navigation from "../components/Nav";
import MovieInfo from "../components/MovieInfo";
import { UserContext } from "../context/User";

function MoviesPage() {
    const { user } = useContext(UserContext)
    const { displayMovies } = useContext(MovieContext)
    const match = useRouteMatch();

    console.log(user)
    
    return (
            <div style={{ width: '900px', margin: '0 auto', backgroundColor: 'white'}}>
                <Navigation />
                <Route exact path={match.url}>
                    {displayMovies} 
                </Route>
                <Route exact path='/movies/:movieId'>
                    <MovieInfo />
                </Route>
            </div>
    )
}

export default MoviesPage;