import React, { useContext } from "react";
import { MovieContext } from "../context/Movie";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Navigation from "../components/Nav";

function MoviesPage() {
    const { displayMovies } = useContext(MovieContext)
    const match = useRouteMatch();
    
    return (
            <div style={{ width: '900px', textAlign: 'center', margin: '0 auto', backgroundColor: '#FFFAFA' }}>
                <Navigation />
                <Switch>
                    <Route exact path={match.url}>
                        {displayMovies} 
                    </Route>
                    <Route exact path={`${match.url}/:movieId`}>
                        <h1>MovieInfo placeholder</h1>
                    </Route>
                </Switch>
            </div>
    )
}

export default MoviesPage;