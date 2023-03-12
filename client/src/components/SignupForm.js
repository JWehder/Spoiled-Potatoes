import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import StyledForm from "../styles/StyledForm";
import CustomButton from "../styles/Button";

function SignupForm() {
    return (
        <>  
            <Form >
                <FloatingLabel
                controlId="floatingInput"
                label="Username"
                className="mb-3"
                >
                <StyledForm.Control type="text" placeholder="Username" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                <StyledForm.Control type="password" placeholder="Password" />
                </FloatingLabel>
                <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
                >
                <StyledForm.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>  
                <FloatingLabel
                controlId="floatingInput"
                label="Favorite Movie"
                className="mb-3"
                >
                <StyledForm.Control type="text" placeholder="Favorite Movie" />
                </FloatingLabel>
                <StyledForm.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <StyledForm.Label>Example textarea</StyledForm.Label>
                <StyledForm.Control as="textarea" rows={3} />
                </StyledForm.Group>
                <CustomButton variant= "primary" type="submit" />
            </Form>
        </>
    )
}

export default SignupForm;