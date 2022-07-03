import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Todos from "./pages/Todos/Todos";
import Navbar from "./Component/NavBar/NavBar";
import Login from "./pages/LoginForm/LoginForm";
import Profile from "./pages/Profile/Profile2";
import EvaluateForm from "./pages/Evaluate/Evaluate";
import HistoryForm from "./pages/History/History";
import NotFound from "./pages/NotFound/NotFound";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path={"/login"}>
            <Login />
          </Route>
          <Route exact path="/Profile" component={<Profile />} />
          <Route exact path="/Evaluate" component={<EvaluateForm />} />
          <Route exact path="/History" component={<HistoryForm />} />
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
