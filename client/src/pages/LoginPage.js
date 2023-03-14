import React, { useState } from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import CustomButton from "../styles/Button";
import SignupForm from "../components/SignupForm";
import Nav from 'react-bootstrap/Nav';
import { Button } from "react-bootstrap";

function LoginPage() {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <Wrapper>
            {showLogin ? (
                <>
                <LoginForm />
                <hr></hr>
                <p>Don't have an account?</p>
                <CustomButton variant= "secondary" onClick={() => setShowLogin(false)}>Sign Up</CustomButton>
                </>
            )
                :
            (
                <>
                <SignupForm />
                <hr></hr>
                <p>Already have an account?</p>
                <CustomButton variant="secondary" onClick={() => setShowLogin(true)} />
                </>
            
            )}
            <Button variant="link">Forgot password?</Button>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    max-width: 500px;
    margin: 40px auto;
    padding: 16px;
`

export default LoginPage;