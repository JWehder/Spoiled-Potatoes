import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import StyledForm from "../styles/StyledForm";
import Wrapper from "../styles/Wrapper";
import StarRating from "./StarRating";
import { UserContext } from "../context/User";
import CustomButton from "../styles/Button";
import styled from "styled-components";
import DisabledStarRating from "./DisabledStarRating";
import { MovieContext } from "../context/Movie";

function EditReviewForm({ rating, comment, id, movie }) {
    const { user } = useContext(UserContext)
    const { updateMovie } = useContext(MovieContext)
    const [editedComment, setEditedComment] = useState(comment);
    const [editedRating, setEditedRating] = useState(rating)
    const [disabled, setDisabled] = useState(true)

    function handleSubmit(e) {
        e.preventDefault()
        setDisabled(true)

        if (editedRating === rating && editedComment === comment) return null

        const review = {
            id: id,
            rating: editedRating,
            comment: editedComment,
            movie_id: movie.id,
            username: user.username
        }
        fetch(`/reviews/${review.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(review)
        }).then((r) => {
            if (r.ok) {
                r.json().then((updatedMovie) => {
                    console.log(updatedMovie)
                    updateMovie(updatedMovie)
                })
            }
        })
    }

    function onDelete() {
        fetch(`/reviews/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(id)
        })
            .then((resp) => resp.json())
            .then((updatedMovie) => {
                console.log(updatedMovie)
                updateMovie(updatedMovie)
            })
    }

    return (
        <Wrapper style={{ padding: "14px"}}>
            <div style={{ display: "flex", justifyContent:"space-between"}}>
               {disabled ? <DisabledStarRating rating={rating} /> :
               <StarRating rating= {editedRating} setRating={setEditedRating} />
                }
                <p style={{ marginLeft: "50px" }}>{user ? user.username : "user"}</p>
                
            </div>
            <StyledForm onSubmit={handleSubmit}>
            <StyledForm.Control 
            as="textarea" 
            name="bio"
            style={{ height: "70px"}}
            value={disabled? comment : editedComment}
            disabled={disabled ? true : false}
            onChange={(e) => setEditedComment(e.target.value)}
            />
            <div style={{ textAlign: "center" }}>
                <DeleteButton onClick={() => onDelete()} variant="danger">Delete</DeleteButton>
                {disabled ? 
                <ReviewButton onClick= {() => setDisabled(false)}variant="secondary">Edit</ReviewButton>
                :
                <ReviewButton type="submit" variant="primary">
                    Submit
                </ReviewButton>
                }
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

const DeleteButton = styled(Button)`
    margin-top: 2px;
    margin-right: 2px;
    margin-bottom: 2px;
    padding: 2px;
`

export default EditReviewForm;