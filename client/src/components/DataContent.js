import React from "react";

function DataContent() {

    return (
        <DataContent>
            <p><b>Rated:</b> <RatingContainer>{movie.rated}</RatingContainer></p>
            <p><b>Director:</b> {movie.director}</p>
            <p><b>Genre:</b> {movie.genre}</p>
            <p><b>Release Date:</b> {movie.release_date}</p>

        </DataContent>
    )
}

const DataContainer = styled.div`
    text-align: center;
    font-size: 13px;

`

export default DataContent;