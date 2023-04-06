import React, { useState } from "react";
import StyledForm from "../styles/StyledForm";
import CustomButton from "../styles/Button";
import { Alert, Form, FloatingLabel } from "react-bootstrap";

function ResetPasswordForm(props) {
    const [email, setEmail] = useState("")
    const [showAlert, setShowAlert] = useState(false)
    const [success, setSuccess] = useState(false)
    const [disabled, setDisabled] = useState(false)
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
                r.json().then(() => {
                    setSuccess(true)
                    setShowAlert(true)
                    setDisabled(true)
                    props.onNextStep()
                })
            } else {
                setShowAlert(true)
            }
        })
    }

    return (
        <>
            <h3 style={{"text-align": "center"}}>Search for your account</h3>
            <hr />
            <StyledForm onSubmit={handleSubmit}>
                    <Form.Label>Please enter the email associated to your account</Form.Label>
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
                {showAlert ? 
                <Alert variant={success ? "success" : "danger"}>{success ? "Please check your email for your custom code." : "The email provided was not recognized."}</Alert> 
                :
                ""
                }
            </StyledForm>
        </>
    )
}

export default ResetPasswordForm;
