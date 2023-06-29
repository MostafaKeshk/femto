import { useForm, yupResolver } from "@mantine/form";
import registerSchema from "../validations/register";
import paths from "../routes/paths";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthApi from "../apis/auth";
import useCallApi from "../hooks/useCallApi";
import { objectToFormData } from "../utils/objectToFormData";
import { useAuth } from "../contexts/AuthContext";

const useRegister = () => {
  const navigate = useNavigate();
  const { callApi, loading } = useCallApi();
  const { handleLogin } = useAuth();
  const [image, setImage] = useState("");

  const handleSubmit = (values: any) => {
    const body = objectToFormData(values);
    callApi(AuthApi.register(body), (response: any) => {
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

  return { form, handleSubmit, handleNavigateLogin, image, setImage, loading };
};

export default useRegister;
