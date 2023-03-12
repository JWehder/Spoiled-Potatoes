import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import StyledForm from "../styles/StyledForm";

function SignupForm() {
    return (
        <>
            <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
            >
            <StyledForm.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
            <StyledForm.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <FloatingLabel
            controlId="floatingInput"
            label="Username"
            className="mb-3"
            >
            <StyledForm.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
            <StyledForm.Control type="password" placeholder="Password" />
            </FloatingLabel>

        </>
    )
}

export default SignupForm;