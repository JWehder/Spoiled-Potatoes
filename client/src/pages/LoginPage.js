import { React, useState } from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import CustomButton from "../styles/Button";
import SignupForm from "../components/SignupForm";
import Nav from 'react-bootstrap/Nav';

function LoginPage() {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <Wrapper>
            {showLogin ? (
                <>
                <LoginForm />
                <hr></hr>
                <p>Don't have an account?</p>
                <CustomButton variant= "secondary" onClick={() => setShowLogin(false)} />
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
            <Nav.Link href="/forgot_password">Forgot pasword?</Nav.Link>
        </Wrapper>
    )
}

export default LoginPage;

const Wrapper = styled.section`
    max-width: 500px;
    margin: 40px auto;
    padding: 16px;
`