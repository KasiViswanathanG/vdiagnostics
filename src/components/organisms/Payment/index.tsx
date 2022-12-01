import React from "react";
import { Stack, Box } from "@mui/material";
import styled from "@emotion/styled";
import CardDetail from "../CardDetail";
import theme from "../../theme";

const StackContainer = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "0.75em",
  width: "100%",
});

const SeperatorLine = styled(Box)({
  border: "1px solid",
  borderColor: `${theme.palette.grey[100]}`,
  height: "39.25em",
  width: "0",
});

const Payment = ({ children, currentUserId }: any) => {
  return (
    <StackContainer>
      {children}
      <SeperatorLine />
      <CardDetail currentUserId={currentUserId} />
    </StackContainer>
  );
};

export default Payment;
