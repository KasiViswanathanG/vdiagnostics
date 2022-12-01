import React from "react";
import { Stack, Box } from "@mui/material";
import { styled } from "@mui/system";
import theme from "../../theme";

const StackContainer = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "0.5em",
  width: "2.5em",
});

const Circle = styled(Box)({
  height: "0.5em",
  width: "0.5em",
  borderRadius: "100%",
  borderWidth: "0.5px",
  borderStyle: "solid",
  borderColor: `${theme.palette.grey[300]}`,
});

const FilledCircle = styled(Circle)({
  borderColor: `${theme.palette.secondary.dark}`,
  backgroundColor: `${theme.palette.secondary.dark}`,
});

const Loader = () => {
  return (
    <StackContainer>
      <FilledCircle />
      <Circle />
      <Circle />
    </StackContainer>
  );
};

export default Loader;
