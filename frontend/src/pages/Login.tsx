import { TextInput, PasswordInput, Button, Box } from "@mantine/core";
import useLogin from "../containers/useLogin";

const Login = () => {
  const { form, handleSubmit, handleNavigateRegister, loading } = useLogin();
  return (
    <Box maw={300} mx="auto">
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
          Submit
        </Button>
      </form>
      <Button mt="sm" onClick={handleNavigateRegister}>
        Register
      </Button>
    </Box>
  );
};

export default Login;
