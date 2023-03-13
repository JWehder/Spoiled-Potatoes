import React, { useContext, useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import StyledForm from "../styles/StyledForm";
import CustomButton from "../styles/Button";
import { UserProvider } from "../context/User";

function LoginForm() {
    const { setUser } = useContext(UserProvider)

    const [loginUser, setLoginUser] = useState({
        username: "",
        password: ""
    })
    const [errors, setErrors] = useState([])

    function onChange(e) {
        setLoginUser({
            ...loginUser,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit() {
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginUser),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user))
            } else {
                r.json.then((err) => setErrors(err.errors))
            }
        })
    }

    return (
        <>
            <StyledForm onSubmit={handleSubmit}>
                <FloatingLabel
                controlId="floatingInput"
                label="Username"
                className="mb-3"
                >
                <StyledForm.Control 
                type="text" 
                placeholder="Username" 
                value= {loginUser}
                onChange={(e) => onChange(e)}
                />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                <StyledForm.Control 
                type="password" 
                placeholder="Password" 
                onChange={(e) => onChange(e)}
                />
                </FloatingLabel>
                <CustomButton variant="primary" type="submit" />
            </StyledForm>
        </>
    )
}

export default LoginForm;