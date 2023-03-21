import React from "react";
import { Route, Switch } from "react-router-dom"
import LoginPage from "../pages/LoginPage";
import { UserProvider } from "../context/User";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import HomePage from "../pages/HomePage";

function App() {
  return (
      <div className="App">
        <UserProvider>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/forgot_password">
              <ForgotPasswordPage />
            </Route>
          </Switch>
        </UserProvider>
      </div>
  );
}

export default App;
