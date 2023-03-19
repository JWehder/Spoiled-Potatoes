import React, { useState } from "react";
import Wrapper from "../styles/Wrapper";
import ResetPasswordForm from "../components/ResetPasswordForm";
import EnterCodeForm from "../components/EnterCodeForm";
import CreateNewPasswordForm from "../components/CreateNewPasswordForm";
import Button from "react-bootstrap/Button"

function ForgotPasswordPage() {
    const [step, setStep] = useState(1);

    function RenderForm() {
        switch (step) {
            case 1:
              return <ResetPasswordForm onNextStep={() => setStep(2)} />;
            case 2:
              return <EnterCodeForm onNextStep={() => setStep(3)} />;
            case 3:
              return <CreateNewPasswordForm onNextStep={() => setStep(1)}/>;
            default:
              return null;
        }
    }

    return (
        <Wrapper>
            {RenderForm()}
            <hr />
            <Button variant="link" href="/login">Remember Password?</Button>
        </Wrapper>
    )
}

export default ForgotPasswordPage;