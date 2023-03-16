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
                <ButtonContainer>
                <Button variant="link">Forgot password?</Button>
                </ButtonContainer>
                <hr />
                <ButtonContainer>
                <p>Don't have an account?</p>
                <CustomButton variant= "secondary" onClick={() => setShowLogin(false)}>Sign Up</CustomButton>
                </ButtonContainer>
                </>
            )
                :
            (
                <>
                <SignupForm />
                <hr />
                <p>Already have an account?</p>
                <CustomButton variant="secondary" onClick={() => setShowLogin(true)}>Sign In</CustomButton>
                </>
            
            )}
        </Wrapper>
    )
}

const Wrapper = styled.section`
    max-width: 500px;
    margin: 40px auto;
    padding: 16px;
    background-color: #F5F5F5;
    border: 1px;
    border-radius: 10px;
`

const ButtonContainer = styled.div`
    text-align: center;
    display: inline-block;
`

export default LoginPage;