import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { getToken } from "utils/storage";

import Login from "pages/Auth/Login";
import Register from "pages/Auth/Register";
import ForgotPassword from "pages/Auth/ForgotPassword";
import ResetPassword from "pages/Auth/ResetPassword";
import Home from "pages/Home";
import UserDetails from "pages/User/Details";

const AuthRoutesGuard = () => {
  // This is essentially a Guard
  // If the user is authenticated - reroute to the Home page.
  const token = getToken();

  if (token) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

const PrivateRoutesGuard = () => {
  // This is essentially a Guard
  // If the user is not authenticated - reroute to the Login page.
  const token = getToken();

  if (!token) {
    return <Navigate to="/auth/login" />;
  }

  return <Outlet />;
};

const Router: React.FC<{}> = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/auth" element={<AuthRoutesGuard />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>
      <Route path="/" element={<PrivateRoutesGuard />}>
        <Route index element={<Home />} />
        <Route path="user/:userId" element={<UserDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
