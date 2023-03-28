import React, { useContext } from "react";
import Wrapper from "../styles/Wrapper";
import styled from "styled-components";
import { MovieContext } from "../context/Movie";

function MovieInfo() {
    // const { movieId } = useParams();
    const { movies } = useContext(MovieContext);
    const movieId = 2

    if (movies.length === 0) {
        return <h1>Loading...</h1>
    }

    const movie = movies.find((movie) => movie.id === movieId) 
    console.log(movie)

    return (
        <Wrapper>
            <StyledImg src={movie.poster} alt={movie.title} />
            <TitleContent>
                <MovieTitle>{movie.title}</MovieTitle>
                <span><img src="potato-5-32.png" alt="potato"/> <h4>77%</h4></span>
            </TitleContent>
           <div>
           <span>Rated {movie.rated}, {movie.release_date}, {movie.genre}, {movie.runtime}</span>
           </div>
           <section>{movie.description}</section>
        </Wrapper>    
    )
}

const StyledImg = styled.img`
    width: 225px;
    height: 260px;
    border: none;
    border-radius: 10px;
    justify-content: center;
`

const MovieTitle = styled.h3`
    text-align: center;
`

const TitleContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export default MovieInfo;