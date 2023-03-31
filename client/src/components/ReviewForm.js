import React, { useContext, useState } from "react";
import { FloatingLabel } from "react-bootstrap";
import StyledForm from "../styles/StyledForm";
import Wrapper from "../styles/Wrapper";
import StarRating from "./StarRating";
import { UserContext } from "../context/User";
import CustomButton from "../styles/Button";
import styled from "styled-components";

function ReviewForm({ movie, updateMovie }) {
    const { user } = useContext(UserContext)
    const [comment, setComment] = useState();
    const [rating, setRating] = useState(0)

    function handleSubmit(e) {
        e.preventDefault()
        const review = {
            rating: rating,
            comment: comment,
            user_id: user.id,
            movie_id: movie.id
        }
        fetch('/reviews', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(review)
        }).then((r) => {
            if (r.ok) {
                r.json().then((updatedMovie) => updateMovie(updatedMovie))
            }
        })
    }
    
    console.log(user)

    return (
        <Wrapper style={{ padding: "14px"}}>
            <div style={{ display: "flex", justifyContent:"space-between"}}>
                <StarRating rating= {rating} setRating={setRating} />
                <p style={{ marginLeft: "50px" }}>{user.username}</p>
            </div>
            <StyledForm onSubmit={handleSubmit}>
            <FloatingLabel 
            controlId="floatingTextarea2" 
            label="What did you think of the movie?" 
            className="mb-3"
            >
            <StyledForm.Control 
            as="textarea" 
            name="bio"
            style={{ height: "70px"}}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            />
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