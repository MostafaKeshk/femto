import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { notifications } from "@mantine/notifications";

const useCallApi = () => {
  const { handleLogout } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);

  const callApi = async (API: any, onSuccess: any, onError?: any) => {
    setLoading(true);
    try {
      const data = await API;
      onSuccess(data);
    } catch (error: any) {
      console.error({ error });
      // error callback
      if (onError) {
        onError(error);
      }

      // error token expired --> logout
      if (error?.response?.status === 401) {
        setTimeout(() => {
          notifications.show({
            color: "red",
            message: "Section expired, please log in again",
          });
        }, 1000);
        handleLogout();
      } else if (error.response?.data?.message) {
        notifications.show({
          color: "red",
          message: error?.response?.data?.message,
        });
      } else {
        notifications.show({
          color: "red",
          message: "Something went wrong.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return { callApi, loading };
};

export default useCallApi;
