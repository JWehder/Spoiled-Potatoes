import React from "react";
import { Route, Switch } from "react-router-dom"
import LoginPage from "../pages/LoginPage";
import { UserProvider } from "../context/User";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import HomePage from "../pages/HomePage";
import { MovieProvider } from "../context/Movie";
import MoviesPage from "../pages/MoviesPage";

function App() {
  return (
      <div className="App" style={{ backgroundColor: '#F5F5F5' }}>
        <UserProvider>
        <MovieProvider>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/movies">
              <MoviesPage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/forgot_password">
              <ForgotPasswordPage />
            </Route>
          </Switch>
        </MovieProvider>
        </UserProvider>
      </div>
  );
}

export default App;
