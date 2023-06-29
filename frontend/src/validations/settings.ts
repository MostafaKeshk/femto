import * as Yup from "yup";

const settingsSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Please enter a valid email"),
  password: Yup.string().test(
    "password",
    "Password must be at least 6 characters",
    (value: any) => {
      if (value && value.length > 0) {
        return value.length >= 6;
      }
      return true;
    }
  ),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), undefined],
    "Passwords must match"
  ),
});

export default settingsSchema;
