import { TextInput, PasswordInput, Button, Box } from "@mantine/core";
import useRegister from "../containers/useRegister";
import UploadImage from "../components/Form/UploadImage";

const Register = () => {
  const { form, handleSubmit, handleNavigateLogin, image, setImage, loading } =
    useRegister();

  return (
    <Box maw={300} mx="auto">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <UploadImage
          image={image}
          setImage={setImage}
          name="image"
          form={form}
        />
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
          Submit
        </Button>
      </form>

      <Button mt="sm" type="submit" onClick={handleNavigateLogin}>
        Login
      </Button>
    </Box>
  );
};

export default Register;
