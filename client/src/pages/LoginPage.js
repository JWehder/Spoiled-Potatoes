import React, { useState } from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import CustomButton from "../styles/Button";
import SignupForm from "../components/SignupForm";
import { Button } from "react-bootstrap";
import Wrapper from "../styles/Wrapper";

function LoginPage() {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <Wrapper>
            {showLogin ? (
                <>
                <LoginForm />
                <ButtonContainer>
                <Button href="/forgot_password" variant="link">Forgot password?</Button>
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

const ButtonContainer = styled.div`
    text-align: center;
    display: inline-block;
`

export default LoginPage;