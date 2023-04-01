import React from "react";
import { FloatingLabel } from "react-bootstrap";
import StyledForm from "../styles/StyledForm";
import Wrapper from "../styles/Wrapper";
import DisabledStarRating from "./DisabledStarRating";

function DisabledReviewForm({ rating, comment }) {

    return (
        <Wrapper style={{ padding: "14px"}}>
            <div style={{ display: "flex", justifyContent:"space-between"}}>
                <DisabledStarRating rating= {rating} />
                <p style={{ marginLeft: "50px" }}>user</p>
            </div>
            <StyledForm>
            <FloatingLabel 
            controlId="floatingTextarea2" 
            label="Comment"
            className="mb-3"
            >
            <StyledForm.Control 
            as="textarea" 
            name="bio"
            style={{ height: "70px"}}
            value={comment}
            disabled
            readOnly
            />
            </FloatingLabel>
            </StyledForm>
        </Wrapper>
    )
}


export default DisabledReviewForm;