import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import paths from "./paths";
import { LoadingOverlay } from "@mantine/core";

const withAuth = (WrappedComponent: any) => {
  const HOCComponent = (props: any) => {
    const navigate = useNavigate();
    const { user } = useAuth();

    useEffect(() => {
      if (!user) {
        navigate(paths.login);
      }
    }, [user, navigate]);

    if (!user) {
      return <LoadingOverlay visible={true} />;
    }

    return <WrappedComponent {...props} />;
  };

  return HOCComponent;
};

export default withAuth;
