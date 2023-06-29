import { Box, Avatar, Text, Button, Container } from "@mantine/core";
import { useAuth } from "../../../contexts/AuthContext";
import { styles } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import paths from "../../../routes/paths";

const Nav = () => {
  const { user, handleLogout } = useAuth();
  const classes = styles();
  const navigate = useNavigate();
  return (
    <Box sx={classes.root}>
      <Container sx={classes.nav} size="xl">
        <Box sx={classes.center}>
          <Text
            onClick={handleLogout}
            color="white"
            weight="bold"
            sx={classes.link}
            mr="sm"
          >
            Logout
          </Text>
          <Text
            onClick={() => navigate(paths.settings)}
            color="white"
            weight="bold"
            sx={classes.link}
            mr="sm"
          >
            Settings
          </Text>
          <Text
            onClick={() => navigate(paths.goals)}
            color="white"
            weight="bold"
            sx={classes.link}
            mr="sm"
          >
            Goals
          </Text>
        </Box>

        <Box sx={classes.center}>
          <Avatar
            mr="sm"
            src={user?.image}
            alt={user?.name}
            radius={100}
            size={50}
          />
          <Text color="white" weight="bold">
            {user?.name}
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Nav;
