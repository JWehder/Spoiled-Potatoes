import React, { useState } from "react";
import StyledForm from "../styles/StyledForm";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Alert } from "react-bootstrap";

function EnterCodeForm() {
    const [code, setCode] = useState(null)
    const [showError, setShowError] = useState(false)

    function handleSubmit() {
        fetch('/reset_password', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(code)
        }).then((r) => {
            if(r.ok) {
                <Redirect to="/create_password" />
            } else {
                setShowError(true)
            }
        })
    }
    
    return (
        <>
            <h2>Please enter the code you were sent via email</h2>
            <hr />
            <StyledForm onSubmit={handleSubmit}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Code"
                    className="mb-3"
                >
                    <StyledForm.Control
                    type="number" 
                    name="code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    />
                </FloatingLabel>
                <CustomButton variant="primary" type="submit">Submit</CustomButton>
            </StyledForm>
            { showError ? <Alert variant="danger" onClose={() => setShowError(false)}>Sorry, we do not recognize that code</Alert> : "" }
        </>
                
    )
}

export default EnterCodeForm;