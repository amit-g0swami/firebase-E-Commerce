import { Route, Switch } from "react-router-dom";
import dashboard from "./dashboard";

export const PrivateRoutes = () => (
  <Switch>
    <Route exact path="/admin" component={dashboard} />
  </Switch>
);
