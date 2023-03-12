import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import StyledForm from "../styles/StyledForm";

function LoginForm() {
    return (
        <>
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

export default LoginForm;