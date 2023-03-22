import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NewsPane from "../components/NewsPane";
import MovieContainer from "../styles/MovieContainer";
import CategoryTitleDiv from "../styles/CategoryTitleDiv";
import { Link } from "react-router-dom";
import Navigation from "../components/Nav";

function HomePage() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('/movies')
        .then((resp) => resp.json())
        .then((movies) => setMovies(movies))
    }, [])

    const displayMovies = movies.map((movie) => {
        return <MovieCard title={movie.title} poster={movie.poster} key={movie.title} />
    })

    return (
            <div style={{ width: '900px', textAlign: 'center', margin: '0 auto', backgroundColor: '#FFFAFA' }}>
                <Navigation />
                <NewsPane />
                <CategoryTitleDiv style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ borderRight: '3px solid black', height: '30px', marginRight: '10px' }}></div>
                    <h3 style={{ width: 'auto', marginRight: '10px' }}>POPULAR</h3>
                    <span style={{ display: 'flex', textAlign: 'right', marginRight: '10px' }}>
                        <Link style={{ position: 'absolute', top: '0', right: '0', textDecoration:'none'}}>See All Movies</Link>
                    </span>
                </CategoryTitleDiv>
    
                <MovieContainer>
                    {displayMovies}
                </MovieContainer>
            </div>
    )
}

export default HomePage;