import React, { useContext } from "react";
import { MovieContext } from "../context/Movie";
import { Route, useParams, useRouteMatch } from "react-router-dom";
import Navigation from "../components/Nav";
import MovieInfo from "../components/MovieInfo";

function MoviesPage() {
    const { displayMovies } = useContext(MovieContext)
    const match = useRouteMatch();
    
    return (
            <div style={{ width: '900px', textAlign: 'center', margin: '0 auto', backgroundColor: '#FFFAFA' }}>
                <Navigation />
                <Route exact path={match.url}>
                    {displayMovies} 
                </Route>
                <Route exact path={`${match.url}/:movie_id`}>
                    <h1>Movie</h1>
                </Route>
            </div>
    )
}

export default MoviesPage;