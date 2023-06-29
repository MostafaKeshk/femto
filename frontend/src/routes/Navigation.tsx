import { Route, Routes as RouterRoutes } from "react-router-dom";

import Login from "../pages/Login";

import paths from "./paths";

import Register from "../pages/Register";
import Home from "../pages/Home";

import { RedirectToHome, RedirectToNotFound } from "./utils";
import Layout from "../components/Layout";
import Goals from "../pages/Goals";

const Navigation = () => {
  return (
    <RouterRoutes>
      <Route path={paths.home} element={<RedirectToHome Component={Home} />} />

      <Route
        path={paths.login}
        element={<RedirectToHome Component={Login} />}
      />

      <Route
        path={paths.register}
        element={<RedirectToHome Component={Register} />}
      />

      <Route element={<Layout />}>
        <Route path={paths.goals} element={<Goals />} />
      </Route>

      <Route path="*" element={<RedirectToNotFound />} />
    </RouterRoutes>
  );
};
export default Navigation;
