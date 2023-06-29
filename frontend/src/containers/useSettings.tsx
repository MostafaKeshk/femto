import { useForm, yupResolver } from "@mantine/form";
import settingsSchema from "../validations/settings";
import { useEffect, useState } from "react";
import AuthApi from "../apis/auth";
import useCallApi from "../hooks/useCallApi";
import { objectToFormData } from "../utils/objectToFormData";
import { useAuth } from "../contexts/AuthContext";
import { notifications } from "@mantine/notifications";

const useSettings = () => {
  const { callApi, loading } = useCallApi();
  const { user, setUser } = useAuth();
  const [image, setImage] = useState("");

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
      image: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: yupResolver(settingsSchema),
  });

  useEffect(() => {
    form.setValues({
      image: "",
      name: user.name,
      email: user.email,
      password: "",
      confirmPassword: "",
    });
    setImage(user.image);
  }, []);

  return { form, handleSubmit, image, setImage, loading };
};

export default useSettings;
