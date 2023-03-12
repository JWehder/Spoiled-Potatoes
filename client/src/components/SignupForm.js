import { React, useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import StyledForm from "../styles/StyledForm";
import CustomButton from "../styles/Button";

function SignupForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [email, setEmail] = useState("")
    const [bio, setBio] = useState("");
    const[favoriteMovie, setFavoriteMovie] = ("")
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                <StyledForm.Control 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                </ FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password Confirmation">
                <StyledForm.Control 
                type="password" 
                placeholder="Password Confirmation" 
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                </FloatingLabel>
                <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                >
                <StyledForm.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>  
                <FloatingLabel
                controlId="floatingInput"
                label="Favorite Movie"
                className="mb-3"
                value={favoriteMovie}
                onChange={(e) => setFavoriteMovie(e.target.value)}
                >
                <StyledForm.Control type="text" placeholder="Favorite Movie" />
                </FloatingLabel>
                <StyledForm.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <StyledForm.Label>Example textarea</StyledForm.Label>
                <StyledForm.Control 
                as="textarea" 
                rows={3} 
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                />
                </StyledForm.Group>
                <CustomButton variant= "primary" type="submit" />
            </StyledForm>
        </>
    )
}

export default SignupForm;