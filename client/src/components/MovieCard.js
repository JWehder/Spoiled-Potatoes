import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function MovieCard({ title, poster }) {

    return (
            <MovieContainer>
                <MovieButton>
                        <StyledImg src={poster} alt={poster}></StyledImg>
                </MovieButton>
                <div>
                    <LinkStyle>
                        <MovieContent>
                            <img src="/potato-5-16.png" alt="potato"></img>
                            <MoviePara>77%</MoviePara>
                        </MovieContent>
                        <MoviePara>{title}</MoviePara>
                    </LinkStyle>
                </div>
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
`
const MovieContent = styled.span`
    display: flex;
    margin-bottom: 5px;
    padding-left: 5px;
`

const LinkStyle = styled(Link)`
    text-decoration: none;
    color: inherit;
`

export default MovieCard;