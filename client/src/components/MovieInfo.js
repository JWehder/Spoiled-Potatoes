import React, { useContext } from "react";
import Wrapper from "../styles/Wrapper";
import styled from "styled-components";
import { MovieContext } from "../context/Movie";
import DataContent from "./DataContent";
import Description from "./Description";

function MovieInfo() {
    // const { movieId } = useParams();
    const { movies } = useContext(MovieContext);
    const movieId = 2

    if (movies.length === 0) {
        return <h1 style={{ textAlign: 'center' }}>Loading...</h1>
    }

    const movie = movies.find((movie) => movie.id === movieId) 
    console.log(movie)

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
            <DataContent movie={movie}/>
            <Description movie={movie}/>
        </Wrapper>    
    )
}

const StyledImg = styled.img`
    width: 250px;
    height: 250px;
    border: none;
    border-radius: 10px;
`

const MovieTitle = styled.h3`
    text-align: center;
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