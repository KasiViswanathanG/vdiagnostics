import React from "react";
import { Typography, styled, Grid } from "@mui/material";
import {
  CardiacRiskAssessment,
  ChooseTest,
  fullBodyCheckup,
  StressAssessment,
  num1299,
  time24,
} from "../../../assets/constants";
import TestInfoCard from "../TestInfoCard";
import cardiac from "../../../assets/cardiac.png";
import fullbody from "../../../assets/body_test.png";
import stress from "../../../assets/stress.png";

const FlexSBDiv = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const FlexSBDMT32Div = styled("div")({
  marginTop: "2em",
  display: "flex",
});

const ML105285Div = styled("div")({
  maxWidth: "1186px",
  marginTop: "5em",
});

const HomePageChooseTest = () => {
  return (
    <ML105285Div>
      <FlexSBDiv>
        <Typography variant="heading1">{ChooseTest}</Typography>
      </FlexSBDiv>
      <FlexSBDMT32Div>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={7} sm={7} md={5} lg={4} xl={4}>
            <TestInfoCard
              data-testid="testInfoCard1"
              imagePath={fullbody}
              cardHeading={fullBodyCheckup}
              cardContents={{
                price: num1299,
                time: time24,
                count: 12,
              }}
            />
          </Grid>
          <Grid item xs={7} sm={7} md={5} lg={4} xl={4}>
            <TestInfoCard
              data-testid="testInfoCard2"
              imagePath={cardiac}
              cardHeading={CardiacRiskAssessment}
              cardContents={{
                price: 1200,
                time: "12 Hrs",
                count: 6,
              }}
            />
          </Grid>
          <Grid item xs={7} sm={7} md={5} lg={4} xl={4}>
            <TestInfoCard
              data-testid="testInfoCard3"
              imagePath={stress}
              cardHeading={StressAssessment}
              cardContents={{
                price: 350,
                time: "3 Hrs",
                count: 3,
              }}
            />
          </Grid>
        </Grid>
      </FlexSBDMT32Div>
    </ML105285Div>
  );
};

export default HomePageChooseTest;
