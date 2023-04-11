import React, { useContext, useState } from "react";
import StyledForm from "../styles/StyledForm";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Alert } from "react-bootstrap";
import { UserContext } from "../context/User";
import CustomButton from "../styles/Button";
import ErrorMessage from "../styles/ErrorMessage";

function EnterCodeForm(props) {
    const { setID } = useContext(UserContext)

    const [code, setCode] = useState(null)
    const [error, setError] = useState(null)

    function handleSubmit(e) {
        e.preventDefault()

        fetch('/reset_password', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(code)
        }).then((r) => {
            if(r.ok) {
                r.json().then((id) => {
                    setID(id)
                    props.onNextStep()
                })
            } else {
                r.json().then((err) => setError(err))
            }
        })
    }
    
    return (
        <>
            <Alert style={{textAlign: 'center'}} variant="success">Please check your email for your custom code.</Alert> 
            <StyledForm onSubmit={handleSubmit}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Code"
                    className="mb-3"
                >
                    <StyledForm.Control
                    type="text" 
                    name="code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    isInvalid={!!error}
                    />
                    <ErrorMessage>{error}</ErrorMessage>
                </FloatingLabel>
                <CustomButton variant="primary" type="submit">Submit</CustomButton>
            </StyledForm>
        </>
                
    )
}

export default EnterCodeForm;