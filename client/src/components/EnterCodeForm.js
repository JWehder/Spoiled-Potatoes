import React, { useContext, useState } from "react";
import StyledForm from "../styles/StyledForm";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Alert } from "react-bootstrap";
import { UserContext } from "../context/User";
import CustomButton from "../styles/Button";

function EnterCodeForm(props) {
    const { setID, showAlert } = useContext(UserContext)

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
                r.json().then((ID) => { 
                    setID(ID)
                    props.onNextStep();
                })
            } else {
                setShowError(true)
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
                    />
                </FloatingLabel>
                <CustomButton variant="primary" type="submit">Submit</CustomButton>
            </StyledForm>
            { showError ? <Alert variant="danger" onClose={() => setShowError(false)}>Sorry, we do not recognize that code</Alert> : "" }
        </>
                
    )
}

export default EnterCodeForm;