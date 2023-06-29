import { Outlet } from "react-router-dom";
import React from "react";
import { Container, Grid, Text } from "@mantine/core";
import { styles } from "./styles";
import AuthSvg from "../../../assets/AuthSvg";

const AuthLayout: React.FC = () => {
  const classes = styles();
  return (
    <Container size="xl">
      <Grid gutter={0}>
        <Grid.Col xs={12} lg={6} sx={classes.centerL}>
          <Outlet />
        </Grid.Col>
        <Grid.Col xs={12} lg={6} sx={classes.centerR}>
          <Text color="brand" fz={30} weight="bold" mb="sm" align="center">
            Welcome to Femto
          </Text>
          <AuthSvg />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default AuthLayout;
