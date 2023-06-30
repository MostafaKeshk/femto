import { Route, Routes as RouterRoutes } from "react-router-dom";

import Login from "../pages/Login";

import paths from "./paths";

import Register from "../pages/Register";

import { RedirectToHome, RedirectToNotFound } from "./utils";
import UserLayout from "../components/Layouts/UserLayout";
import AuthLayout from "../components/Layouts/AuthLayout";

import Goals from "../pages/Goals";
import Settings from "../pages/Settings";

const Navigation = () => {
  return (
    <RouterRoutes>
      <Route element={<AuthLayout />}>
        <Route
          path={paths.login}
          element={<RedirectToHome Component={Login} />}
        />

        <Route
          path={paths.register}
          element={<RedirectToHome Component={Register} />}
        />
      </Route>

      <Route element={<UserLayout />}>
        <Route path={paths.home} element={<Goals />} />
        <Route path={paths.settings} element={<Settings />} />
        <Route path="*" element={<RedirectToNotFound />} />
      </Route>
    </RouterRoutes>
  );
};
export default Navigation;
