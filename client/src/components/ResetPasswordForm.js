import React, { useState } from "react";
import StyledForm from "../styles/StyledForm";
import CustomButton from "../styles/Button";
import { Form, FloatingLabel } from "react-bootstrap";

function ResetPasswordForm(props) {

    const [email, setEmail] = useState("")
    const [error, setError] = useState()

    function handleSubmit(e) {
        e.preventDefault()

        fetch('/forgot_password', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email: email})
        }).then((r) => {
            if(r.ok) {
                r.json().then(() => props.onNextStep())
            } else {
                r.json().then((err) => setError(err.errors))
            }
        })
    }

    return (
        <>
            <h3 style={{"textAlign": "center"}}>Search for your account</h3>
            <hr />
            <StyledForm style= {{"textAlign": "center"}} onSubmit={handleSubmit}>
                    <Form.Label>Please enter the email associated with your account</Form.Label>
                    <FloatingLabel
                    controlId="floatingInput"
                    label="Email"
                    className="mb-3"
                    >
                    <StyledForm.Control
                    type="email" 
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    isInvalid={!!error}
                    />
                    {!!error ? <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback> : ""}
                    </FloatingLabel>
                <CustomButton variant= "primary" type="submit">Send Code</CustomButton>
            </StyledForm>
        </>
    )
}

export default ResetPasswordForm;
