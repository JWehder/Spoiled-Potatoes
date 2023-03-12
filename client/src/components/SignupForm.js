import { React, useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import StyledForm from "../styles/StyledForm";
import CustomButton from "../styles/Button";

function SignupForm() {
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [userObject, setUserObject] = useState({
        username: "",
        password: "",
        password_confirmation: "",
        email: "",
        bio: "",
        favoriteMovie: ""
    })



    function handleSubmit() {
        
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
                <FloatingLabel
                controlId="floatingInput"
                label="Username"
                className="mb-3"
                >
                <StyledForm.Control 
                type="text" 
                placeholder="Username" 
                name="username"
                value={userObject.username}
                onChange={(e) => changeUserValue(e)}
                />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                <StyledForm.Control 
                type="password" 
                name="password"
                placeholder="Password" 
                value={userObject.password}
                onChange={(e) => changeUserValue(e)}
                />
                </ FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password Confirmation">
                <StyledForm.Control 
                type="password" 
                name="password_confirmation"
                value={userObject.password_confirmation}
                onChange={(e) => setUserObject(e)}
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
                <StyledForm.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <StyledForm.Label>Bio</StyledForm.Label>
                <StyledForm.Control 
                as="textarea" 
                rows={3} 
                name="favorite_movie"
                value={userObject.bio}
                onChange={(e) => changeUserValue(e)}
                />
                </StyledForm.Group>
                <CustomButton variant= "primary" type="submit" />
            </StyledForm>
        </>
    )
}

export default SignupForm;