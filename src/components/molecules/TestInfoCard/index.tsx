import React from "react";
import { Card, CardContent, CardMedia, Typography, Stack } from "@mui/material";
import {
  testPriceText,
  testTimeText,
  testTotalText,
} from "../../../assets/constants";

import { styled } from "@mui/system";
import theme from "../../theme";

type TestInfoCardType = {
  imagePath: string;
  cardHeading: string;
  cardContents: { price: number; time: string; count: number };
};

const CardStyled = styled(Card)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  maxWidth: "23.875em",
  minWidth: "fit-content",
  height: "11em",
  padding: "0.75em",
  gap: "0.125em",
  background: `${theme.palette.background.default}`,
  border: "0.0625em solid",
  borderColor: `${theme.palette.grey[50]}`,
  boxShadow: "0px 0px 12px rgba(233, 232, 237, 0.53)",
  borderRadius: "0.75em",
  [theme.breakpoints.down("sm")]: {
    padding: "0.5em",
  },
});

const cardMediaStyle = {
  width: "9em",
};

const cardContentStyle = {
  padding: "0em 0.75em",
};

const StackA = styled(Stack)({
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "0em 0.75em",
  gap: "1.875em",
});

const StackB = styled(Stack)({
  flexDirection: "column",
  gap: "0.5em",
});

const TestHeading = styled(Typography)({
  fontSize: "1em",
  color: `${theme.palette.text.primary}`,
  letterSpacing: "-0.005em",
  lineHeight: "1.25em",
});

const TestPrice = styled(Typography)({
  fontSize: "1em",
  color: `${theme.palette.text.secondary}`,
  lineHeight: "1.25em",
});

const TestTimeCount = styled(Typography)({
  fontSize: "0.75em",
  color: `${theme.palette.text.disabled}`,
  lineHeight: "1.125em",
});

const TestInfoCard = ({
  imagePath,
  cardHeading,
  cardContents,
}: TestInfoCardType) => {
  const { price, time, count } = cardContents;
  return (
    <CardStyled>
      <CardMedia
        data-testid="imageTest"
        component="img"
        style={cardMediaStyle}
        image={imagePath}
        alt="body-test-img"
      />
      <StackA>
        <CardContent style={cardContentStyle}>
          <StackB>
            <TestHeading data-testid="cardHeadingTest" variant="heading1">
              {cardHeading}
            </TestHeading>

            <TestPrice data-testid="priceTest" variant="heading2">
              {testPriceText}
              {price}
            </TestPrice>

            <TestTimeCount data-testid="timeTest" variant="body2">
              {testTimeText} {time}
            </TestTimeCount>

            <TestTimeCount data-testid="countTest" variant="body2">
              {count} {testTotalText}
            </TestTimeCount>
          </StackB>
        </CardContent>
      </StackA>
    </CardStyled>
  );
};

export default TestInfoCard;
