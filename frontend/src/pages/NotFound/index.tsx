import { Box, Button, Text } from "@mantine/core";
import NotFoundSvg from "../../assets/NotFoundSvg";
import paths from "../../routes/paths";
import { useNavigate } from "react-router-dom";
import { styles } from "./styles";

const NotFound = () => {
  const navigate = useNavigate();
  const classes = styles();

  return (
    <Box sx={classes.center}>
      <Box sx={{ width: "300px" }}>
        <NotFoundSvg />
      </Box>
      <Text weight="bold" fz={30} color="brand" my="sm">
        Page Not Found
      </Text>
      <Button onClick={() => navigate(paths.home)}>Back to home</Button>
    </Box>
  );
};

export default NotFound;
