import { Route, Switch } from "react-router-dom";
import { Cart } from "./cart";
import { Home } from "./home";
import { Products } from "./products";
import { Profile } from "./profile";

export const ProtectedRoutes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/products" component={Products} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/profile" component={Profile} />
  </Switch>
);
