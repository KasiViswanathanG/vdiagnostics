import { Stack, Typography, Box } from "@mui/material";
import React from "react";
import Icon from "../../atoms/Icon";
import { ReactComponent as dollar } from "../../../assets/icons/dollar.svg";
import { ReactComponent as clock } from "../../../assets/icons/clock.svg";
import { testPriceText, testTimeText } from "../../../assets/constants";
import { styled } from "@mui/system";
import theme from "../../theme";

type TestCostTimeInfoType = {
  cardContents: { price: number; time: string };
};

const textStyle = {
  fontSize: "0.75em",
  color: `${theme.palette.text.primary}`,
  lineHeight: "1.125em",
};

const StackA = styled(Stack)({
  flexDirection: "row",
  gap: "1.5em",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "24.5625em",
  minWidth: "fit-content",
  border: "0.0625em solid",
  borderColor: `${theme.palette.grey[100]}`,
  borderRadius: "0.75em",
  padding: "0.125em 0.25em",
  backgroundColor: `${theme.palette.background.default}`,
  [theme.breakpoints.down("sm")]: {
    gap: "0.5em",
  },
});

const StackB = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  padding: "0.25em",
});

const SeperatorDot = styled(Box)({
  width: "0.375em",
  height: "0.375em",
  backgroundColor: `${theme.palette.grey[500]}`,
  borderRadius: "100%",
});

const StackC = styled(Stack)({
  flexDirection: "row",
  gap: "0.25em",
  alignItems: "center",
  padding: "0.25em",
});

const TestCostTimeInfo = ({ cardContents }: TestCostTimeInfoType) => {
  const { price, time } = cardContents;
  return (
    <StackA>
      <StackB>
        <Icon component={dollar} sx={{ fill: "none" }} />
        <Typography data-testid="testCost" variant="body2" style={textStyle}>
          {testPriceText}
          {price}
        </Typography>
      </StackB>
      <SeperatorDot />
      <StackC>
        <Icon component={clock} sx={{ fill: "none" }} />
        <Typography data-testid="testTime" variant="body2" style={textStyle}>
          {testTimeText} {time}
        </Typography>
      </StackC>
    </StackA>
  );
};

export default TestCostTimeInfo;
