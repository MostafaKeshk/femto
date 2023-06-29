import { useForm, yupResolver } from "@mantine/form";
import loginSchema from "../validations/login";
import paths from "../routes/paths";
import { useNavigate } from "react-router-dom";
import AuthApi from "../apis/auth";
import { useAuth } from "../contexts/AuthContext";
import useCallApi from "../hooks/useCallApi";

const useLogin = () => {
  const navigate = useNavigate();
  const { callApi, loading } = useCallApi();
  const { handleLogin } = useAuth();

  const handleSubmit = (values: any) => {
    callApi(AuthApi.login(values), (response: any) => {
      handleLogin(response.user, response.token);
    });
  };

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: yupResolver(loginSchema),
  });

  const handleNavigateRegister = () => {
    navigate(paths.register);
  };

  return { form, handleSubmit, handleNavigateRegister, loading };
};

export default useLogin;
