import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function MovieCard() {

    return(
        <>
            <MovieContainer>
                <MovieButton></MovieButton>
                <div>
                    <LinkStyle>
                        <MovieContent>
                            <img src="/potato-5-16.png" alt="potato"></img>
                            <MoviePara>77%</MoviePara>
                        </MovieContent>
                        <MoviePara>Name of Movie</MoviePara>
                    </LinkStyle>
                </div>
            </MovieContainer>
        </>
    )
}

const MovieButton = styled.button`
    width: 180px;
    height: 258px;
    background: transparent;
    border: none;
    border-radius: 10px;
`

const MovieContainer = styled.div`
    width: 180px;
    height: 340px;
    border-radius: 10px;
    margin: 20px;
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