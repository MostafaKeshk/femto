import { TextInput, PasswordInput, Button, Box, Text } from "@mantine/core";
import useLogin from "../../containers/useLogin";
import { styles } from "./styles";

const Login = () => {
  const { form, handleSubmit, handleNavigateRegister, loading } = useLogin();
  const classes = styles();
  return (
    <Box sx={{ width: "100%" }}>
      <Text fz={30} weight="bold" align="center" color="brand">
        Login to your account
      </Text>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          mt="sm"
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          mt="sm"
          placeholder="Password"
          label="Password"
          withAsterisk
          {...form.getInputProps("password")}
        />

        <Button mt="sm" type="submit" fullWidth loading={loading}>
          Login
        </Button>
      </form>
      <Box mt="xs" sx={classes.center}>
        <Text>Don't have an account yet?</Text>

        <Text
          ml={4}
          color="brand"
          sx={classes.link}
          onClick={handleNavigateRegister}
        >
          Register now
        </Text>
      </Box>
    </Box>
  );
};

export default Login;
