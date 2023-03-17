import React, { useState } from "react";
import StyledForm from "../styles/StyledForm";
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function EnterCodeForm() {
    const [code, setCode] = useState(null)
    
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
            </StyledForm>
        </>
                
    )
}

export default EnterCodeForm;