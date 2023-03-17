import React from "react";
import Wrapper from "../styles/Wrapper";
import CustomButton from "../styles/Button";

function ResetPasswordPage() {
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
            <p>Remember Password?</p>
            <CustomButton variant="link" href="/login" variant="primary" />
        </Wrapper>
    )
}

const LoginHeader = styled.section`
    background-color: #F5F5F5;
    border: 1px;
    border-radius: 10px;
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.3);
`