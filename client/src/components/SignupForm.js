import { React, useState, useContext } from "react";
import StyledForm from "../styles/StyledForm";
import CustomButton from "../styles/Button";
import { UserContext } from "../context/User";
import { Redirect } from "react-router-dom";
import { Col, Row, FloatingLabel, Alert } from "react-bootstrap";

function SignupForm({ setShowLogin }) {
    const { setUser } = useContext(UserContext)

    const [errors, setErrors] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    const [showErrors, setShowErrors] = useState(false)

    const [userObject, setUserObject] = useState({
        first_name: "",
        last_name: "",
        username: "",
        password: "",
        password_confirmation: "",
        email: "",
        bio: "",
        favorite_movie: ""
    })

    function handleSubmit(e) {
        e.preventDefault()

        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(userObject)
        }).then((r) => {
            if(r.ok) {
                r.json().then((user) => { 
                    setUser(user)
                    setShowLogin(true)
                })
            } else {
                r.json().then((err) => {
                    // setShowErrors(true)
                    // setErrors(err.errors)
                    console.log(err.errors)
                })
            }
        })
    }

    function changeUserValue(e) {
        setUserObject({
            ...userObject,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>  
            <StyledForm onSubmit={handleSubmit}>
                {showErrors ?
                errors.map((error) => (
                    <Alert onClose={() => setShowErrors(false)} variant="danger" key={error} dismissable>
                        {error}
                    </Alert>
                ))
                :
                ""
                }
                <Row>
                <Col>
                <FloatingLabel
                label="First Name"
                className="mb-3"
                >
                <StyledForm.Control 
                type="text" 
                name="first_name"
                value={userObject.first_name}
                onChange={(e) => changeUserValue(e)}
                />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel 
                label="Last Name" 
                className="mb-3"
                >
                <StyledForm.Control 
                type="text" 
                name="last_name"
                value={userObject.last_name}
                onChange={(e) => changeUserValue(e)}
                />
                </ FloatingLabel>
                </Col>
                </Row>
                <FloatingLabel
                label="Username"
                className="mb-3"
                >
                <StyledForm.Control 
                type="text" 
                name="username"
                value={userObject.username}
                onChange={(e) => changeUserValue(e)}
                />
                </FloatingLabel>
                <FloatingLabel 
                label="Password" 
                className="mb-3"
                >
                <StyledForm.Control 
                type="password" 
                name="password"
                value={userObject.password}
                onChange={(e) => changeUserValue(e)}
                />
                </ FloatingLabel>
                <FloatingLabel 
                label="Password Confirmation" 
                className="mb-3"
                >
                <StyledForm.Control 
                type="password" 
                name="password_confirmation"
                value={userObject.password_confirmation}
                onChange={(e) => changeUserValue(e)}
                />
                </FloatingLabel>
                <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
                >
                <StyledForm.Control
                type="email" 
                name="email"
                value={userObject.email}
                onChange={(e) => changeUserValue(e)}
                />
                </FloatingLabel>  
                <FloatingLabel
                controlId="floatingInput"
                label="Favorite Movie"
                className="mb-3"
                >
                <StyledForm.Control 
                type="text" 
                name="favorite_movie"
                value={userObject.favorite_movie}
                onChange={(e) => changeUserValue(e)}
                />
                </FloatingLabel>
                <FloatingLabel 
                controlId="floatingTextarea2" 
                label="Bio" 
                className="mb-3"
                >
                <StyledForm.Control 
                as="textarea" 
                name="bio"
                style={{ height: '100px' }}
                value={userObject.bio}
                onChange={(e) => changeUserValue(e)}
                />
                </FloatingLabel>
                <CustomButton variant= "primary" type="submit">Sign Up</CustomButton>
            </StyledForm>
        </>
    )
}

export default SignupForm;