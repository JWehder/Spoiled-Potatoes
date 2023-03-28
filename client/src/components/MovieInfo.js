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

    const displayMovieInfo = 

    const movie = movies.find((movie) => movie.id === movieId) 

    return (
        <Wrapper>
            <div style={{ textAlign: "center", marginBottom: "10px" }}>
            <StyledImg src={movie.poster} alt={movie.title} />
            </div>
            <TitleContent>
                <MovieTitle>{movie.title}</MovieTitle>
                <Rating>
                    <img src="potato-5-32.png" alt="potato"/> 
                    <h4 style={{ marginLeft: "5px" }}>77%</h4>
                </Rating>
            </TitleContent>
           <div>
           <span> <RatingContainer>{movie.rated}</RatingContainer> {movie.release_date}, {movie.genre}, {movie.runtime}</span>
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
`

const MovieTitle = styled.h3`
    text-align: center;
`

const RatingContainer = styled.div`
    border: 1px solid black;
    display: inline-block;
`

const TitleContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Rating = styled.span`
    display: flex;
    align-items: center;
    margin-left: 10px;
`

export default MovieInfo;