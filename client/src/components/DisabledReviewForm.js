import React from "react";
import StyledForm from "../styles/StyledForm";
import Wrapper from "../styles/Wrapper";
import DisabledStarRating from "./DisabledStarRating";

function DisabledReviewForm({ rating, comment, user }) {

    return (
        <Wrapper style={{ padding: "14px"}}>
            <div style={{ display: "flex", justifyContent:"space-between"}}>
                <DisabledStarRating rating= {rating} />
                <p style={{ marginLeft: "50px" }}>{user.username}</p>
            </div>
            <StyledForm>
            <StyledForm.Control 
            as="textarea" 
            name="bio"
            style={{ height: "70px"}}
            value={comment}
            disabled
            readOnly
            />
            </StyledForm>
        </Wrapper>
    )
}


export default DisabledReviewForm;