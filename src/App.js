import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { CheckisUserLoggedIn } from "./redux/actions/auth-action";
import { ProtectedBoundary } from "./templates/protected-boundary";
import { AuthRoutes } from "./pages/auth";
import { ProtectedRoutes } from "./pages";
import { NonProtectedBoundary } from "./templates/non-protected-boundary";
import { RootLayout } from "./layout";
import { PrivateBoundary } from "./templates/private-boundary";
import { PrivateRoutes } from "./pages/admin";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CheckisUserLoggedIn());
  }, [dispatch]);

  return (
    <RootLayout>
      <NonProtectedBoundary>
        <AuthRoutes />
      </NonProtectedBoundary>
      <ProtectedBoundary>
        <ProtectedRoutes />
      </ProtectedBoundary>
      <PrivateBoundary>
        <PrivateRoutes />
      </PrivateBoundary>
    </RootLayout>
  );
}
