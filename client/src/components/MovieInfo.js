import React, { useContext } from "react";
import Wrapper from "../styles/Wrapper";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { MovieContext } from "../context/Movie";

function MovieInfo() {
    const { movieId } = useParams();
    const { movies } = useContext(MovieContext);
    console.log("Movie")

    const movie = movies.find((movie) => movie.id === movieId) 

    return (
        <Wrapper>
           <StyledImg src={movie.poster} alt={movie.title} />
           <h3>{movie.title}</h3>
           <span>Rated {movie.rated}, {movie.release_date}, {movie.genre}, {movie.runtime}</span>
           <p><img src="potato-5-32.png" alt="potato"/> <h4><br>77%</br></h4></p>
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

export default MovieInfo;