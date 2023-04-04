import React, { useContext, useState } from "react";
import StyledForm from "../styles/StyledForm";
import { FloatingLabel, Form } from "react-bootstrap";
import CustomButton from "../styles/Button";
import Wrapper from "../styles/Wrapper";
import { MovieContext } from "../context/Movie";

function CreateMovieForm() {
    const { setMovies, movies } = useContext(MovieContext)

    const [errors, setErrors] = useState();
    const [movieObj, setMovieObj] = useState({
        title: "",
        release_date: "",
        rated: "",
        runtime: "",
        genre: "",
        director: "",
        actors: "",
        description: "",
        poster: ""
    })

    function handleSubmit(e) {
        e.preventDefault()

        fetch("/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(movieObj)
        }).then((r) => {
            if(r.ok) {
                r.json().then((movie) => setMovies([...movies, movie]))
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    const displayErrors = (errors, errorKey = null) => {
        return errors.map((error) => {
            if (errorKey === "password" && error === "is invalid") {
                error = "Sorry, your password is invalid. Your password must contain at least one digit, at least one lowercase letter, one uppercase letter, and a special character (! @ # $ % ^ &)"
            } else if (errorKey === "email" && error === "is invalid") {
                error = "Please follow typical email formatting: joe@email.com"
            }
            return ( 
            <Form.Control.Feedback type="invalid">
            {error}
            </Form.Control.Feedback>
            );
        })
    }

    function changeMovieValue(e) {
        setMovieObj({
            ...movieObj,
            [e.target.name]: e.target.value
        })
    }


    return (
        <Wrapper>
        <StyledForm onSubmit={handleSubmit}>
            <FloatingLabel
            label="Movie Title"
            className="mb-3"
            >
            <StyledForm.Control 
            type="text" 
            name="title"
            value={movieObj.title}
            onChange={changeMovieValue}
            isInvalid={!!errors && errors.title}
            />
            {errors && errors.title && displayErrors(errors.title)}
            </FloatingLabel>
            <FloatingLabel 
            label="Release Date" 
            className="mb-3"
            >
            <StyledForm.Control 
            type="text" 
            name="release_date"
            value={movieObj.release_date}
            onChange={changeMovieValue}
            isInvalid={!!errors && errors.release_date}
            />
            {errors && errors.release_date && displayErrors(errors.release_date)}
            </ FloatingLabel>
            <FloatingLabel
            label="Rated"
            className="mb-3"
            >
            <StyledForm.Control 
            type="text" 
            name="rated"
            value={movieObj.rated}
            onChange={changeMovieValue}
            isInvalid={!!errors && errors.rated}
            />
            {errors && errors.rated && displayErrors(errors.rated)}
            </FloatingLabel>

            <FloatingLabel 
            label="Runtime" 
            className="mb-3"
            >
            <StyledForm.Control 
            type="text" 
            name="runtime"
            value={movieObj.runtime}
            onChange={changeMovieValue}
            isInvalid={!!errors && errors.runtime}
            />
            {errors && errors.runtime && displayErrors(errors.runtime)}
            </ FloatingLabel>
            <FloatingLabel 
            label="Genre" 
            className="mb-3"
            >
            <StyledForm.Control 
            type="text" 
            name="genre"
            value={movieObj.genre}
            onChange={changeMovieValue}
            isInvalid={!!errors && errors.genre}
            />
            {errors && errors.genre && displayErrors(errors.genre)}
            </FloatingLabel>
            <FloatingLabel
            controlId="floatingInput"
            label="Director"
            className="mb-3"
            >
            <StyledForm.Control
            type="text" 
            name="director"
            value={movieObj.director}
            onChange={changeMovieValue}
            isInvalid={!!errors && errors.director}
            />
            {errors && errors.director && displayErrors(errors.director)}
            </FloatingLabel>  
            <FloatingLabel
            controlId="floatingInput"
            label="Actors"
            className="mb-3"
            >
            <StyledForm.Control 
            type="text" 
            name="actors"
            value={movieObj.actors}
            onChange={changeMovieValue}
            isInvalid={!!errors && errors.actors}
            />
            {errors && errors.actors && displayErrors(errors.actors)}
            </FloatingLabel>
            <FloatingLabel 
            controlId="floatingTextarea2" 
            label="Description" 
            className="mb-3"
            >
            <StyledForm.Control 
            as="textarea" 
            name="description"
            style={{ height: '100px' }}
            value={movieObj.description}
            onChange={changeMovieValue}
            isInvalid={!!errors && errors.description}
            />
            {errors && errors.description && displayErrors(errors.description)}
            </FloatingLabel>
            <FloatingLabel 
            controlId="floatingTextarea2" 
            label="Movie Image" 
            className="mb-3"
            >
            <StyledForm.Control 
            name="description"
            type="text"
            value={movieObj.poster}
            onChange={changeMovieValue}
            isInvalid={!!errors && errors.poster}
            />
            {errors && errors.poster && displayErrors(errors.poster)}
            </FloatingLabel>
            <CustomButton variant= "primary" type="submit">Create Movie</CustomButton>
        </StyledForm>
        </Wrapper>
    )
}


export default CreateMovieForm;