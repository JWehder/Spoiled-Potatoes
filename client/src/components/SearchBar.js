import React, { useContext, useState } from "react";
import { MovieContext } from "../context/Movie";
import StyledForm from "../styles/StyledForm";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

function SearchBar(props) {
    const { setCurrentMovies } = useContext(MovieContext)

    const [value, setValue] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        fetch(`/search?q=${value}`)
            .then((resp) => resp.json())
            .then((searchResults) => { 
                setCurrentMovies(searchResults)
                props.history.push(`/movies/search_results/${value}`)
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