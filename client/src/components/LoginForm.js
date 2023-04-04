import React, { useContext, useState } from "react";
import { FloatingLabel, Form } from 'react-bootstrap';
import StyledForm from "../styles/StyledForm";
import CustomButton from "../styles/Button";

import { UserContext } from "../context/User";
import { Redirect, withRouter } from "react-router-dom";

function LoginForm(props) {
    const { setUser, user } = useContext(UserContext);

    const [loginUser, setLoginUser] = useState({
        username: "",
        password: ""
    })
    const [error, setError] = useState(null)

    function onChange(e) {
        setLoginUser({
            ...loginUser,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginUser),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    setUser(user)
                })
            } else {
                r.json().then((err) => setError(err.errors[0]))
            }
        })
    }

    if (user) return <Redirect to='/' />

    return (
            <StyledForm onSubmit={handleSubmit}>
                <FloatingLabel
                controlId="floatingInput"
                label="Username"
                className="mb-3"
                >
                <StyledForm.Control 
                type="text" 
                placeholder="Username" 
                value= {loginUser.username}
                name="username"
                onChange={(e) => onChange(e)}
                isInvalid={!!error}
                />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                <StyledForm.Control 
                type="password" 
                placeholder="Password" 
                name="password"
                value={loginUser.passwowrd}
                onChange={(e) => onChange(e)}
                isInvalid={!!error}
                />
                {error && 
                <Form.Control.Feedback type="invalid">
                {error}
                </Form.Control.Feedback>
                }
                </FloatingLabel>
                <CustomButton variant="primary" type="submit">Login</CustomButton>
            </StyledForm>
    )
}

export default LoginForm;