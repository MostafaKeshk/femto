import { useForm, yupResolver } from "@mantine/form";
import settingsSchema from "../validations/settings";
import { useEffect } from "react";
import AuthApi from "../apis/auth";
import useCallApi from "../hooks/useCallApi";
import { objectToFormData } from "../utils/objectToFormData";
import { useAuth } from "../contexts/AuthContext";
import { notifications } from "@mantine/notifications";

const useSettings = () => {
  const { callApi, loading } = useCallApi();
  const { user, setUser } = useAuth();

  const handleSubmit = (values: any) => {
    const body = objectToFormData(values);
    callApi(AuthApi.update(body), (response: any) => {
      setUser(response.user);
      notifications.show({
        color: "green",
        message: "Settings has been updated successfully",
      });
    });
  };

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: yupResolver(settingsSchema),
  });

  useEffect(() => {
    form.setValues({
      name: user.name,
      email: user.email,
      password: "",
      confirmPassword: "",
    });
  }, []);

  return { form, handleSubmit, loading };
};

export default useSettings;
