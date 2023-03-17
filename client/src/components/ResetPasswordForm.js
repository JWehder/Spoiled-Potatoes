import React, { useState } from "react";
import StyledForm from "../styles/StyledForm";
import CustomButton from "../styles/Button";
import { Alert } from "react-bootstrap";

function ResetPasswordForm(props) {
    const [email, setEmail] = useState("")
    const [showAlert, setShowAlert] = useState(false)
    const [success, setSuccess] = useState(false)
    const [disabled, setDisabled] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()

        fetch('/forgot_password', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(email)
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
            <h2>Search for your account</h2>
            <hr />
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
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={disabled ? "true" : "false"}
                    />
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
