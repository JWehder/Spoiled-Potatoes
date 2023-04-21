import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function MovieCard({ overall_rating, id, title, poster }) {

    return (
            <MovieContainer>
                <LinkStyle to={`/movies/${id}`}>
                <MovieButton>
                        <StyledImg src={poster} alt={poster} />
                </MovieButton>
                <div style={{ paddingLeft: '10px'}}>
                    <MovieContent>
                        <img src="/potato-5-16.png" alt="potato"></img>
                        <MoviePara>{overall_rating}%</MoviePara>
                    </MovieContent>
                        <MoviePara>{title}</MoviePara>
                </div>
                </LinkStyle>
            </MovieContainer>
    )
}

const MovieButton = styled.button`
    width: 180px;
    height: 258px;
    background: transparent;
    border: none;
    border-radius: 10px;
`

const StyledImg = styled.img`
    width: 180px;
    height: 258px;
    border: none;
    border-radius: 10px;

    &:hover {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }
`

const MovieContainer = styled.div`
    width: 180px;
    height: 340px;
    border-radius: 10px;
    margin: 20px;
    margin-left: 10px;
    display: inline-grid;
`
const MoviePara = styled.p`
    font-size: 12px;
    margin: 0px 0px 0px 3px;
    text-align: left;
`
const MovieContent = styled.span`
    display: flex;
    margin-bottom: 5px;
    margin-top: 5px;
`

const LinkStyle = styled(Link)`
    text-decoration: none;
    color: inherit;
`

export default MovieCard;