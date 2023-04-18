import React, { useContext, useState } from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import CustomButton from "../styles/Button";
import SignupForm from "../components/SignupForm";
import { Button } from "react-bootstrap";
import Wrapper from "../styles/Wrapper";
import { Link, Redirect } from "react-router-dom"
import { UserContext } from "../context/User";

function LoginPage() {
    const [showLogin, setShowLogin] = useState(true)
    const { user } = useContext(UserContext)

    function handleToggleLogin() {
        setShowLogin(!showLogin)
    }

    if (user && user.username && user.password) return <Redirect to='/' />

    return (
        <Wrapper>
            {showLogin ? (
                <>
                <LoginForm />
                <ButtonContainer>
                <Button style={{paddingLeft: "3px"}} variant="link"><Link to="/forgot_password/enter_email">Forgot password?</Link></Button>
                </ButtonContainer>
                <hr />
                <ButtonContainer>
                <p>Don't have an account?</p>
                <CustomButton variant= "secondary" onClick={handleToggleLogin}>Sign Up</CustomButton>
                </ButtonContainer>
                </>
            )
            :
            (
                <>
                <SignupForm setShowLogin={setShowLogin}/>
                <hr />
                <p>Already have an account?</p>
                <CustomButton onClick={handleToggleLogin}variant="secondary">Sign In</CustomButton>
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