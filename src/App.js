import Admin from "./pages/admin";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { CheckisUserLoggedIn } from "./redux/actions/auth-action";
import { Navigation } from "./components/nav-bar";
import { ProtectedBoundary } from "./templates/protected-boundary";
import { AuthRoutes } from "./pages/auth";
import { ProtectedRoutes } from "./pages";
import { NonProtectedBoundary } from "./templates/non-protected-boundary";
import { Footer } from "./components/footer";
import { Route } from "react-router-dom";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CheckisUserLoggedIn());
  }, [dispatch]);
  return (
    <div>
      <Navigation />
      <NonProtectedBoundary>
        <AuthRoutes />
      </NonProtectedBoundary>
      <ProtectedBoundary>
        <ProtectedRoutes />
      </ProtectedBoundary>
      <Route exact path="/admin" component={Admin} />
      <Footer />
    </div>
  );
}
