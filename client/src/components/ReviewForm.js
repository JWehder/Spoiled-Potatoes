import React, { useState } from "react";
import { FloatingLabel } from "react-bootstrap";
import StyledForm from "../styles/StyledForm";

function ReviewForm() {
    const [comment, setComment] = useState();

    return (
        <>
            <FloatingLabel 
            controlId="floatingTextarea2" 
            label="What did you think of the movie?" 
            className="mb-3"
            >
            <StyledForm.Control 
            as="textarea" 
            name="bio"
            style={{ height: '100px' }}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            />
            </FloatingLabel>
        </>
    )
}

export default ReviewForm;