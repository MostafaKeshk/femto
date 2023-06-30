import { TextInput, PasswordInput, Button, Box, Text } from "@mantine/core";
import useRegister from "../../containers/useRegister";
import { styles } from "./styles";

const Register = () => {
  const { form, handleSubmit, handleNavigateLogin, loading } = useRegister();
  const classes = styles();

  return (
    <Box sx={{ width: "100%" }}>
      <Text fz={30} weight="bold" align="center" color="brand" mb="xs">
        Join us now
      </Text>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          mt="sm"
          withAsterisk
          label="Name"
          placeholder="Name"
          {...form.getInputProps("name")}
        />
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
        <PasswordInput
          mt="sm"
          placeholder="Confirm Password"
          label="Confirm Password"
          withAsterisk
          {...form.getInputProps("confirmPassword")}
        />

        <Button mt="sm" type="submit" fullWidth loading={loading}>
          Register
        </Button>
      </form>

      <Box mt="xs" sx={classes.center}>
        <Text>Already have an account?</Text>

        <Text
          ml={4}
          color="brand"
          sx={classes.link}
          onClick={handleNavigateLogin}
        >
          Login
        </Text>
      </Box>
    </Box>
  );
};

export default Register;
