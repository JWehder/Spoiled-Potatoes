import React from "react";
import styled from "styled-components";

function DataContent({ movie }) {

    const displayGenres = movie.genre.join(', ')

    return (
        <DataContainer>
            <Dp><b>Rated:</b> <RatingContainer>{movie.rated}</RatingContainer></Dp>
            <Dp><b>Director:</b> {movie.director}</Dp>
            <Dp><b>Actors:</b> {movie.actors}</Dp>
            <Dp><b>Genre:</b> {displayGenres}</Dp>
            <Dp><b>Release Date:</b> {movie.release_date}</Dp>
            <Dp><b>Runtime:</b> {movie.runtime}</Dp>
        </DataContainer>
    )
}

const DataContainer = styled.div`
    font-size: 13px;
    margin: 15px;
`

const Dp = styled.p`
    margin-bottom: 2px;
`

const RatingContainer = styled.div`
    border: 1px solid black;
    display: inline-block;
`

export default DataContent;