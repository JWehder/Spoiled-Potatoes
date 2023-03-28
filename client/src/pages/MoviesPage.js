import React, { useContext } from "react";
import { MovieContext } from "../context/Movie";
import { Route, useRouteMatch } from "react-router-dom";
import Navigation from "../components/Nav";

function MoviesPage() {
    const { displayMovies } = useContext(MovieContext)
    const match = useRouteMatch();
    
    return (
            <div style={{ width: '900px', textAlign: 'center', margin: '0 auto', backgroundColor: '#FFFAFA' }}>
                <Navigation />
                <Route exact path={match.url}>
                    {displayMovies} 
                </Route>
            </div>
    )
}

export default MoviesPage;