import { Route, Switch } from "react-router-dom";
import { Login } from "./login";
import { Register } from "./register";

export const AuthRoutes = () => (
  <Switch>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </Switch>
);
