import React, { useState } from "react";
import Wrapper from "../styles/Wrapper";
import ResetPasswordForm from "../components/ResetPasswordForm";
import EnterCodeForm from "../components/EnterCodeForm";
import CreateNewPasswordForm from "../components/CreateNewPasswordForm";
import { Button } from "react-bootstrap"
import { Link, withRouter } from "react-router-dom"

function ForgotPasswordPage(props) {
    const [step, setStep] = useState(1);

    function RenderForm() {
        switch (step) {
            case 1:
              return <ResetPasswordForm onNextStep={() => setStep(step + 1)} />;
            case 2:
              return <EnterCodeForm onNextStep={() => setStep(step + 1)} />;
            case 3:
              return <CreateNewPasswordForm onNextStep={() => setStep(1)}/>;
            default:
              return null;
        }
    }

    return (
        <Wrapper>
            {RenderForm()}
            {/* <Route exact path="/forgot_password/enter_email">
              <ResetPasswordForm />
            </Route>
            <Route exact path="/forgot_password/enter_code">
              <EnterCodeForm />
            </Route>
            <Route exact path="/forgot_password/create_password">
              <CreateNewPasswordForm />
            </Route>*/}
            <hr />
            <Button variant="link"><Link to="/login">Remember Password?</Link></Button> 
        </Wrapper>
    )
}

export default withRouter(ForgotPasswordPage);