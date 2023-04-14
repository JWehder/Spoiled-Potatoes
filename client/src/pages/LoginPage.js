import React, { useState } from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import CustomButton from "../styles/Button";
import SignupForm from "../components/SignupForm";
import { Button } from "react-bootstrap";
import Wrapper from "../styles/Wrapper";
import { Link, Route } from "react-router-dom"

function LoginPage() {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <Wrapper>
            {showLogin ? (
                <>
                <LoginForm />
                <ButtonContainer>
                <Button variant="link"><Link to="/forgot_password/enter_email">Forgot password?</Link></Button>
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
                <SignupForm setShowLogin={setShowLogin}/>
                <hr />
                <p>Already have an account?</p>
                <CustomButton onClick={() => setShowLogin(true)}variant="secondary">Sign In</CustomButton>
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