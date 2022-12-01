import React from "react";
import { Card, styled, Typography } from "@mui/material";
import { COLORS } from "../../theme/Colors";

const StyledCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  maxHeight: "5.5em",
  width: "10.3125em",
  backgroundColor: COLORS.BETA_PURPLE_50,
  borderRadius: "0.75em",
  boxShadow: "none",
});

const MarginDiv = styled("div")({
  margin: "1.0625em 0.75em",
});

interface InfoBoxProps {
  info: string;
}

const InfoBox = ({ info }: InfoBoxProps) => {
  return (
    <StyledCard>
      <MarginDiv>
        <Typography
          variant="overlineRegular"
          color="text.primary"
          data-testid="info"
        >
          {info}
        </Typography>
      </MarginDiv>
    </StyledCard>
  );
};

export default InfoBox;
