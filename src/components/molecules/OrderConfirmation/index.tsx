import React from "react";
import { styled } from "@mui/material/styles";
import { Paper, Typography } from "@mui/material";
import Icon from "../../atoms/Icon";
import { ReactComponent as info } from "../../../assets/icons/info.svg";
import { orderPlaced, instructionsHeading } from "../../../assets/constants";

const StyledPaper = styled(Paper)({
  width: "30.125em",
  height: "15.3125em",
  boxShadow: "0em 0em 1.625em rgba(233, 232, 237, 0.5)",
  textAlign: "left",
});

const StyledHeading = styled(Typography)({
  padding: "1.5em 1.5em 0em 1.5em",
});

const SubHeadingDivStyle = styled("div")({
  marginTop: "2.125em",
  display: "flex",
  flexDirection: "row",
  paddingLeft: "1.5em",
});

const StyledSubHeading = styled(Typography)({
  fontSize: "1em",
  lineHeight: "1.25em",
  fontWeight: "600",
  marginTop: "-0.1875em",
});

const InstructionsDivStyle = styled("div")({
  paddingLeft: "1.5em",
  paddingRight: "3.25em",
});

const StyledInstructions = styled(Typography)({
  fontWeight: "400",
});

interface OrderConfirmationProps {
  instructions: string;
}

const OrderConfirmation = ({ instructions }: OrderConfirmationProps) => {
  return (
    <StyledPaper>
      <StyledHeading
        color="text.primary"
        gutterBottom
        variant="subtitle1"
        data-testid="heading"
      >
        {orderPlaced}
      </StyledHeading>
      <SubHeadingDivStyle>
        <Icon component={info} />
        <StyledSubHeading
          gutterBottom
          color="primary.dark"
          data-testid="subHeading"
        >
          {instructionsHeading}
        </StyledSubHeading>
      </SubHeadingDivStyle>
      <InstructionsDivStyle>
        <StyledInstructions
          gutterBottom
          variant="caption2"
          color="text.secondary"
          data-testid="instructions"
        >
          {instructions}
        </StyledInstructions>
      </InstructionsDivStyle>
    </StyledPaper>
  );
};

export default OrderConfirmation;
