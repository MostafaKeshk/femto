import {
  TextInput,
  PasswordInput,
  Button,
  Text,
  Container,
} from "@mantine/core";
import { styles } from "./styles";
import useSettings from "../../containers/useSettings";

const Settings = () => {
  const { form, handleSubmit, loading } = useSettings();
  const classes = styles();
  return (
    <Container size="xl" sx={classes.root}>
      <Text fz={25} weight="bold" color="brand" mb="xs">
        Settings
      </Text>
      <form onSubmit={form.onSubmit(handleSubmit)} style={{ width: "100%" }}>
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
          Update
        </Button>
      </form>
    </Container>
  );
};

export default Settings;
