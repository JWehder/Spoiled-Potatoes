import React, { useContext, useState } from "react";
import { FloatingLabel } from "react-bootstrap";
import StyledForm from "../styles/StyledForm";
import Wrapper from "../styles/Wrapper";
import StarRating from "./StarRating";
import { UserContext } from "../context/User";
import CustomButton from "../styles/Button";
import styled from "styled-components";
import DisabledStarRating from "./DisabledStarRating";

function DisabledReviewForm({ rating, comment }) {
    const { user } = useContext(UserContext)

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

export default DisabledReviewForm;