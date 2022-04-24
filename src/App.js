import React from "react";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
export const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <h1>Hello</h1>
    </Router>
  );
};

export default App;
