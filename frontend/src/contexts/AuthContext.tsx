import React, { createContext, useContext, useState, useEffect } from "react";
import { LoadingOverlay } from "@mantine/core";
import paths from "../routes/paths";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "@mantine/hooks";

type ContextState = {
  user: any | null;
  setUser: (user: any) => void;
  token: any | null;
  setToken: (token: any) => void;
  handleLogin: (user: any, token: any) => void;
  handleLogout: () => void;
};

const initialValues = {
  user: null,
  setUser: () => {},
  token: null,
  setToken: () => {},
  handleLogin: () => {},
  handleLogout: () => {},
};

type IProps = {
  children: any;
};

export const AuthContext = createContext<ContextState>(initialValues);

export const AuthProvider: React.FC<IProps> = ({ children }) => {
  const [user, setUser, removeUser] = useLocalStorage<string | null>({
    key: "femto-user",
    defaultValue: null,
  });

  const [loading, setLoading] = useState(true);
  const [token, setToken, removeToken] = useLocalStorage<string | null>({
    key: "femto-token",
    defaultValue: null,
  });

  const navigate = useNavigate();

  const handleLogin = (user: any, token: any) => {
    setUser(user);
    setToken(token);
  };

  const handleLogout = () => {
    removeUser();
    removeToken();
    navigate(paths.login);
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        handleLogin,
        handleLogout,
      }}
    >
      {loading ? <LoadingOverlay visible={true} /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): ContextState => useContext(AuthContext);
