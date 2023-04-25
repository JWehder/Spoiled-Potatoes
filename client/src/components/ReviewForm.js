import React, { useContext, useState } from "react";
import { FloatingLabel } from "react-bootstrap";
import StyledForm from "../styles/StyledForm";
import Wrapper from "../styles/Wrapper";
import StarRating from "./StarRating";
import { UserContext } from "../context/User";
import CustomButton from "../styles/Button";
import styled from "styled-components";
import ErrorMessage from "../styles/ErrorMessage";

function ReviewForm({ movie, updateMovie }) {
    const { user, setUser } = useContext(UserContext)
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0)
    const [errors, setErrors] = useState()

    function handleSubmit(e) {
        e.preventDefault()

        const reviewObj = {rating: rating, comment: comment, movie_id: movie.id, user_id: user.id}                                   

        fetch('/reviews', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reviewObj)
        }).then((r) => {
            if (r.ok) {
                r.json().then((data) => {
                    updateMovie(data[0])
                    setUser(data[1])
                    setComment("")
                    setRating(0)
                    setErrors()
                })                              
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
        <Wrapper style={{ padding: "14px"}} onClick={() => console.log("I have been clicked!")}>
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

export default ReviewForm;