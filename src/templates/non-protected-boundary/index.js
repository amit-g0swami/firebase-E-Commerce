import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export const NonProtectedBoundary = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  return !isLoggedIn ? children : <Redirect to="/" />;
};
