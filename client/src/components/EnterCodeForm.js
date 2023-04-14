import React, { useContext, useState } from "react";
import StyledForm from "../styles/StyledForm";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Alert } from "react-bootstrap";
import { UserContext } from "../context/User";
import CustomButton from "../styles/Button";
import ErrorMessage from "../styles/ErrorMessage";
import { withRouter } from "react-router-dom";

function EnterCodeForm(props) {
    const { setUser, user } = useContext(UserContext)

    const [code, setCode] = useState("")
    const [error, setError] = useState()

    function handleSubmit(e) {
        e.preventDefault()
        console.log(user)

        fetch('/reset_password', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({code: code, email: user.email})
        }).then((r) => {
            if(r.ok) {
                r.json().then((id) => {
                    setUser({...user, id: id})
                    props.history.push("/forgot_password/create_password")
                    // props.onNextStep()
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

export default withRouter(EnterCodeForm);