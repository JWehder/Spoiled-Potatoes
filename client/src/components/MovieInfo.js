import React, { useContext } from "react";
import Wrapper from "../styles/Wrapper";
import styled from "styled-components";
import { MovieContext } from "../context/Movie";
import CategoryTitleDiv from "../styles/CategoryTitleDiv";

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


            <CategoryTitleDiv style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ borderRight: '3px solid black', height: '30px', marginRight: '10px' }}></div>
                    <h4 style={{ width: 'auto', marginRight: '10px' }}>Description</h4>
            </CategoryTitleDiv>
            <Description>{movie.description}</Description>
        </Wrapper>    
    )
}

const StyledImg = styled.img`
    width: 225px;
    height: 260px;
    border: none;
    border-radius: 10px;
`
const Description = styled.p`
    font-size: 13px;
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