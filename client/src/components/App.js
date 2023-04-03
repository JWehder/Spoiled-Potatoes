import React from "react";
import { Route, Switch } from "react-router-dom"
import LoginPage from "../pages/LoginPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";

function App() {

  return (
      <div className="App" style={{ backgroundColor: '#F5F5F5' }}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/movies">
              <MoviesPage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/forgot_password">
              <ForgotPasswordPage />
            </Route>
          </Switch>
      </div>
  );
}

export default App;
