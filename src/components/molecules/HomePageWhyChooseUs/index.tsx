import { Grid, styled, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "../../theme/Colors";
import Feauturebox2 from "../../molecules/FeaturesBox2";
import {
  noOfTests,
  noOfHomes,
  certified,
  clia,
  reports,
  safe,
  WhyChooseUs
} from "../../../assets/constants";
import { ReactComponent as torch } from "../../../assets/icons/tests.svg";
import { ReactComponent as home } from "../../../assets/icons/homes.svg";
import { ReactComponent as labs } from "../../../assets/icons/lab-technician3.svg";
import { ReactComponent as clias } from "../../../assets/icons/awards.svg";
import { ReactComponent as report } from "../../../assets/icons/report.svg";
import { ReactComponent as safes } from "../../../assets/icons/shields.svg";

const MPBGDiv = styled("div")({
  backgroundColor: COLORS.ALPHA_BLUE_800,
  width: "100%",
  marginTop: "5em",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const WDiv = styled("div")({
  maxWidth: "1186px",
  padding: "3.75em 0em",
});

const FlexSBMT32Div = styled("div")({
  marginTop: "2em",
  display: "flex",
  justifyContent: "space-between",
});

const HomePageWhyChooseUs = () => {
  return (
    <MPBGDiv>
      <WDiv>
        <Typography variant="heading1" color="white">
          {WhyChooseUs}
        </Typography>
        <FlexSBMT32Div>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={7} sm={7} md={5} lg={4} xl={4}>
              <Feauturebox2
                component={torch}
                content={noOfTests}
                data-testid="featureBox1"
              />
            </Grid>
            <Grid item xs={7} sm={7} md={5} lg={4} xl={4}>
              <Feauturebox2
                component={home}
                content={noOfHomes}
                data-testid="featureBox2"
              />
            </Grid>
            <Grid item xs={7} sm={7} md={5} lg={4} xl={4}>
              <Feauturebox2
                component={labs}
                content={certified}
                data-testid="featureBox3"
              />
            </Grid>
            <Grid item xs={7} sm={7} md={5} lg={4} xl={4}>
              <Feauturebox2
                component={clias}
                content={clia}
                data-testid="featureBox4"
              />
            </Grid>
            <Grid item xs={7} sm={7} md={5} lg={4} xl={4}>
              <Feauturebox2
                component={report}
                content={reports}
                data-testid="featureBox5"
              />
            </Grid>
            <Grid item xs={7} sm={7} md={5} lg={4} xl={4}>
              <Feauturebox2
                component={safes}
                content={safe}
                data-testid="featureBox6"
              />
            </Grid>
          </Grid>
        </FlexSBMT32Div>
      </WDiv>
    </MPBGDiv>
  );
};

export default HomePageWhyChooseUs;
