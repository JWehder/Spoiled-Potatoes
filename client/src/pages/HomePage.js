import React, { useState } from "react";
import MovieCard from "../components/MovieCard";

function HomePage() {

    const [movies, setMovies] = useState([])

    

    return (
        <div>
            <MovieCard />
        </div>
    )
}

export default HomePage;