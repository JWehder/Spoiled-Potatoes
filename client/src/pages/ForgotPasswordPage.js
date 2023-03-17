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
            <CustomButton variant="link" href="/login" />
        </Wrapper>
    )
}

export default ResetPasswordPage;