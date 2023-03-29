import React from "react";
import styled from "styled-components";

function Description({ movie }) {

    return (
        <>
            <div style={{ marginLeft: '15px' }}>
                <h4 style={{ width: 'auto', marginRight: '10px' }}>Description</h4>
                <Summary>{movie.description}</Summary>
            </div>
        </>
    )
}

const Summary = styled.p`
    font-size: 13px;
`

export default Description;