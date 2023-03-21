import React, { useContext, useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import StyledForm from "../styles/StyledForm";
import CustomButton from "../styles/Button";
import Alert from 'react-bootstrap/Alert';
import { UserContext } from "../context/User";

function LoginForm() {
    const { setUser } = useContext(UserContext);

    const [loginUser, setLoginUser] = useState({
        username: "",
        password: ""
    })
    const [showErrors, setShowErrors] = useState(false)
    const [errors, setErrors] = useState([])

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
                r.json().then((user) => setUser(user))
            } else {
                setShowErrors(true)
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    return (
            <StyledForm onSubmit={handleSubmit}>
                {showErrors ?
                errors.map((error) => {
                    return <Alert onClose={() => setShowErrors(false)} variant="danger" key={error} dismissable>
                        {error}
                    </Alert>
                })
                :
                ""
                }
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
                />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                <StyledForm.Control 
                type="password" 
                placeholder="Password" 
                name="password"
                value={loginUser.passwowrd}
                onChange={(e) => onChange(e)}
                />
                </FloatingLabel>
                <CustomButton variant="primary" type="submit">Login</CustomButton>
            </StyledForm>
    )
}

export default LoginForm;