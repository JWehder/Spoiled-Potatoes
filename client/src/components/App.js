import React from "react";
import { Route, Switch } from "react-router-dom"


function App() {
  return (
    <div className="App">

      <button>Click me!</button>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
