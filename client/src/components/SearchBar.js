import React, { useContext, useState, useRef } from "react";
import { MovieContext } from "../context/Movie";
import StyledForm from "../styles/StyledForm";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

function SearchBar() {
    const { setMovies, setIsSubmitted, isSubmitted } = useContext(MovieContext)

    const [value, setValue] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        fetch(`/search?q=${value}`)
            .then((resp) => resp.json())
            .then((searchResults) => { 
                setMovies(searchResults)
                setIsSubmitted(!isSubmitted)
            })
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center'}}>
        <StyledForm onSubmit={handleSubmit}>
        <Search
            placeholder="Search for a movie..."
            type="search"
            value = {value}
            onChange={(e) => setValue(e.target.value)}
        />
        </StyledForm>
        </div>
    )
}

const Search = styled(StyledForm.Control)`
    border-radius: 20px;
    font-size: 12px;
    overflow-x: scroll;
    width: 200px;
`

export default withRouter(SearchBar);