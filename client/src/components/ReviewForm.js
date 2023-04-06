import React, { useContext, useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import StyledForm from "../styles/StyledForm";
import Wrapper from "../styles/Wrapper";
import StarRating from "./StarRating";
import { UserContext } from "../context/User";
import CustomButton from "../styles/Button";
import styled from "styled-components";
import { MovieContext } from "../context/Movie";

function ReviewForm({ movie, updateMovie }) {
    const { user } = useContext(UserContext)
    // const { displayErrors } = useContext(MovieContext)
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0)
    const [errors, setErrors] = useState()

    function handleSubmit(e) {
        e.preventDefault()
        console.log(user)

        const reviewObj = {rating: rating, comment: comment, movie_id: movie.id, user_id: user.id}

        fetch('/reviews', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reviewObj)
        }).then((r) => {
            if (r.ok) {
                r.json().then((updatedMovie) => updateMovie(updatedMovie))
            } else {
                r.json().then((err) => {
                    setErrors(err.errors)
                })
            }
        })
    }

    const displayErrors = (errors, errorKey = null) => {
        return errors.map((error) => {
            return ( 
            <ErrorMessage>
            Comment {error}
            </ErrorMessage>
            );
        })
    }

    return (
        <Wrapper style={{ padding: "14px"}}>
            <div style={{ display: "flex", justifyContent:"space-between"}}>
                <StarRating rating= {rating} setRating={setRating} />
                <p style={{ marginLeft: "50px" }}>{user ? user.username : "user"}</p>
            </div>
            {errors && errors.rating ? <ErrorMessage>Rating {errors.rating}</ErrorMessage> : ""}
            <StyledForm onSubmit={handleSubmit}>
            <FloatingLabel 
            controlId="floatingTextarea2" 
            label="What did you think of the movie?" 
            className="mb-3"
            >
            <StyledForm.Control 
            as="textarea" 
            name="comment"
            style={{ height: "70px"}}
            value={comment}
            isInvalid={!!errors && errors.comment}
            onChange={(e) => setComment(e.target.value)}
            />
            {errors && errors.comment && displayErrors(errors.comment)}
            </FloatingLabel>
            <div style={{ textAlign: "center" }}>
                <ReviewButton variant="primary" type="submit">Submit</ReviewButton>
            </div>
            </StyledForm>
        </Wrapper>
    )
}

const ReviewButton = styled(CustomButton)`
    margin-top: 2px;
    margin-bottom: 2px;
    padding: 2px;
`

const ErrorMessage = styled.p`
    color: rgb(225, 0, 25);
    font-size: 14.25px;
    margin-bottom: 4px;
`

export default ReviewForm;