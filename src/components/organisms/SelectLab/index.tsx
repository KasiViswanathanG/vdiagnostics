import React from "react";
import { styled } from "@mui/system";
import { COLORS } from "../../theme/Colors/index";
import { Stack, Typography } from "@mui/material";
import LabInfoCard2 from "../LabCard/index";
import { labSelect } from "../../../assets/constants";

type Lab = {
  labName: string;
  testPrice: string;
  totalTestPrice: string;
};

interface LabProps {
  // eslint-disable-next-line no-unused-vars
  setLab?: (l: Lab) => void;
}

const StackA = styled(Stack)({
  flexDirection: "column",
  gap: "26px",
  borderRadius: "8px",
  width: "556px",
  padding: "27px 24px",
  borderColor: `${COLORS.GREY_100}`,
  boxShadow: "0px 0px 12px rgba(233, 232, 237, 0.53)",
});
const StackC = styled(Stack)({
  flexDirection: "row",
  alignItems: "start",
  justifyContent: "space-between",
  width: "583px",
});
const StackF = styled(Stack)({
  gap: "1em",
});
const SelectText = styled(Typography)({
  color: `${COLORS.TEXT_HIGH}`,
  textTransform: "none",
});

const Selectlab = ({ setLab }: LabProps) => {
  return (
    <StackA>
      <StackC>
        <SelectText data-testid="text2" variant="bodyMedium">
          {labSelect}
        </SelectText>
      </StackC>
      <StackF>
        <LabInfoCard2 setLab={setLab}></LabInfoCard2>
        <LabInfoCard2 setLab={setLab}></LabInfoCard2>
      </StackF>
    </StackA>
  );
};

export default Selectlab;
