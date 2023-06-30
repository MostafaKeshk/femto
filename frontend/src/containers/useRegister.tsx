import { useForm, yupResolver } from "@mantine/form";
import registerSchema from "../validations/register";
import paths from "../routes/paths";
import { useNavigate } from "react-router-dom";
import AuthApi from "../apis/auth";
import useCallApi from "../hooks/useCallApi";
import { useAuth } from "../contexts/AuthContext";

const useRegister = () => {
  const navigate = useNavigate();
  const { callApi, loading } = useCallApi();
  const { handleLogin } = useAuth();

  const handleSubmit = (values: any) => {
    callApi(AuthApi.register(values), (response: any) => {
      handleLogin(response.user, response.token);
    });
  };

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: yupResolver(registerSchema),
  });

  const handleNavigateLogin = () => {
    navigate(paths.login);
  };

  return { form, handleSubmit, handleNavigateLogin, loading };
};

export default useRegister;
