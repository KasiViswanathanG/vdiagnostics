import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const Container = styled(Box)({
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: `#E5E5E5`,
});

const LoginScreens = () => {
  return (
    <Container data-testid="loginscreen">
      <Outlet></Outlet>
    </Container>
  );
};

export default LoginScreens;
