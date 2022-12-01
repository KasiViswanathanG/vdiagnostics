import { Box, styled } from "@mui/material";
import React from "react";
import { instructions } from "../../../assets/constants";
import Receipt, { PatientProps } from "../../molecules/Receipt";
import theme from "../../theme";
import Trackorder from "../Trackorder";

const StyledDiv = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  margin: "3em 0em 0em 10em",
});

const MLDiv = styled("div")({
  width: "1366px",
});

const SeperatorLine = styled(Box)({
  border: "1px solid",
  borderColor: `${theme.palette.grey[100]}`,
  height: "39.25em",
  width: "0",
});

interface TrackYourOrderProps {
  patients: PatientProps[];
  address: string;
  total: number;
}

function TrackYourOrder({ patients, address, total }: TrackYourOrderProps) {
  return (
    <MLDiv>
      <StyledDiv>
        <Receipt
          patients={patients}
          address={address}
          total={total}
          instructions={instructions}
        />
        <SeperatorLine />
        <Trackorder />
      </StyledDiv>
    </MLDiv>
  );
}

export default TrackYourOrder;
