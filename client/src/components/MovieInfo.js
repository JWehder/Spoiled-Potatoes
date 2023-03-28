import React from "react";
import Wrapper from "../styles/Wrapper";
import styled from "styled-components";

function MovieInfo() {

    console.log("Movie")

    return (
        <Wrapper>
            <StyledImg></StyledImg>

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