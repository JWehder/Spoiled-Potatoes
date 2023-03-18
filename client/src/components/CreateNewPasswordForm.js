import React, { useContext, useState } from "react";
import StyledForm from "../styles/StyledForm";
import { UserContext } from "../context/User";
import { Redirect } from "react-router-dom";
import { Alert } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import CustomButton from "../styles/Button";

function CreateNewPasswordForm(props) {
    const { ID, setUser, user } = useContext(UserContext)
    const [password, setPassword] = useState("")
    const [password_confirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState([])
    const [showErrors, setShowErrors] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()

        fetch(`/users/${ID}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                password: password,
                password_confirmation: password_confirmation
            }).then((r) => {
                if(r.ok) {
                    r.json().then((user) => setUser(user))
                } else {
                    r.json().then((errors) => setErrors(errors))
                }
            })
        })

        if (user) {
            fetch('/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
            .then((r) => r.json())
            .then(() => <Redirect to="/" />)
        } else {
            return 
        }
        props.onNextStep();
    }

    return (
        <>
            {showErrors ?
            errors.map((error) => {
                return <Alert onClose={() => setShowErrors(false)} variant="danger" key={error} dismissable>
                    {error}
                </Alert>
            })
            :
            ""
            }
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