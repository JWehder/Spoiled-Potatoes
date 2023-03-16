import React, { useState } from "react";
import Wrapper from "../styles/Wrapper";
import StyledForm from "../styles/StyledForm";
import CustomButton from "../styles/Button";
import { Alert } from "react-bootstrap";

function ResetPasswordForm() {

    function handleSubmit(e) {
        e.preventDefault()

        fetch('')
    }

    return (
        <>
            <StyledForm onSubmit={handleSubmit}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Please enter the email associated with your account"
                    className="mb-3"
                >
                    <StyledForm.Control
                    type="email" 
                    name="email"
                    value={email}
                    onChange={(e) => changeUserValue(e)}
                    />
                </FloatingLabel>
                <CustomButton variant= "primary" type="submit">Sign Up</CustomButton>
                <Alert variant={success ? "success" : "danger"}>{success ? "Email Sent!" : "The email provided was not recognized."}</Alert>

            </StyledForm>
        </>
    )
}

export default ResetPasswordForm;

const SuccessMessage = styled.p`
    color: #4CAF50
`