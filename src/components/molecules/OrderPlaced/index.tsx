import React from "react";
import Image from "../../atoms/Image";
import paymentSuccess from "../../../assets/payment_success.png";
import OrderConfirmation from "../OrderConfirmation";
import { instructions } from "../../../assets/constants";
import { styled } from "@mui/material";

const StyledDiv = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "4em",
  width: "100%",
});

const MLDiv = styled("div")({
  width: "1186px",
});

const OrderPlaced = () => {
  return (
    <MLDiv>
      <StyledDiv>
        <Image src={paymentSuccess} />
        <OrderConfirmation instructions={instructions} />
      </StyledDiv>
    </MLDiv>
  );
};

export default OrderPlaced;
