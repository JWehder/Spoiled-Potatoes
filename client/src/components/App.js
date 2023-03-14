import React from "react";
import { Route, Switch } from "react-router-dom"
import LoginPage from "../pages/LoginPage";
import { UserProvider } from "../context/User";

function App() {
  return (
      <div className="App">
        <UserProvider>
          <button>Click me!</button>
          <Switch>
            <Route path="/page">
              <LoginPage />
            </Route>
          </Switch>
        </UserProvider>
      </div>
  );
}

export default App;
