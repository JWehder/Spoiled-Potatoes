import React, { useContext, useState } from "react";
import StyledForm from "../styles/StyledForm";
import { UserContext } from "../context/User";

function CreateNewPasswordForm() {
    const { user, setUser } = useContext(UserContext)
    const [password, setPassword] = useState("")
    const [password_confirmation, setPasswordConfirmation] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        fetch('')
    }

    return (
        <>
            <StyledForm onSubmit= {handleSubmit}>
                <FloatingLabel 
                label="Password" 
                className="mb-3"
                >
                <StyledForm.Control 
                type="password" 
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                </ FloatingLabel>
                <FloatingLabel 
                label="Password Confirmation" 
                className="mb-3"
                >
                <StyledForm.Control 
                type="password" 
                name="password_confirmation"
                value={password_confirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                </FloatingLabel>
                <CustomButton variant="primary" type="submit">Login</CustomButton>
            </StyledForm>
        </>
    )
}

export default CreateNewPasswordForm;