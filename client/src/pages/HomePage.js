import React, { useContext } from "react";
import NewsPane from "../components/NewsPane";
import MovieContainer from "../styles/MovieContainer";
import CategoryTitleDiv from "../styles/CategoryTitleDiv";
import { Link } from "react-router-dom";
import Navigation from "../components/Nav";
import { MovieContext } from "../context/Movie";

function HomePage() {

    const { displayMovies, movies } = useContext(MovieContext)

    console.log(movies)

    return (
            <div style={{ width: '900px', textAlign: 'center', margin: '0 auto', backgroundColor: '#FFFAFA' }}>
                <Navigation />
                <NewsPane />
                <CategoryTitleDiv style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ borderRight: '3px solid black', height: '30px',marginLeft: '18px', marginRight: '10px' }}></div>
                    <h3 style={{ width: 'auto', marginRight: '20px'}}>POPULAR</h3>
                    <span style={{ display: 'flex', textAlign: 'right', marginRight: '10px' }}>
                        <Link to= "/movies" style={{ position: 'absolute', top: '0', right: '0', textDecoration:'none'}}>See All Movies</Link>
                    </span>
                </CategoryTitleDiv>
    
                <MovieContainer>
                    {displayMovies}
                </MovieContainer>
            </div>
    )
}

export default HomePage;