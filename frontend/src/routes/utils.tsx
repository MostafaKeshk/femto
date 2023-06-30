import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import paths from "./paths";
import NotFound from "../pages/NotFound";

type IProps = {
  Component: any;
};

export const RedirectToHome: React.FC<IProps> = ({ Component }) => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to={paths.home} />;
  }

  return <Component />;
};

export const RedirectToNotFound: React.FC = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to={paths.login} />;
  }

  if (location.pathname === "/") {
    return <Navigate to={paths.home} />;
  }

  return <NotFound />;
};
