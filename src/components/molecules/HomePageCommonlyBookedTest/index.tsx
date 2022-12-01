import { Grid, styled, Typography } from "@mui/material";
import React from "react";
import {
  CommonlyBookedTest,
  CompleteBloodCount,
  CovidRTPCR,
  DiabetesTest,
  FullbodyCheck,
  KidneyFunctionTest,
  LipidProfile,
  LiverFunctionTest,
  ThyroidTest,
} from "../../../assets/constants";
import Testbox from "../../molecules/Testbox";

import { ReactComponent as body } from "../../../assets/icons/body.svg";
import { ReactComponent as covid } from "../../../assets/icons/covid.svg";
import { ReactComponent as liver } from "../../../assets/icons/liver.svg";
import { ReactComponent as blood } from "../../../assets/icons/bloodtest.svg";
import { ReactComponent as diabetes } from "../../../assets/icons/diabetestest.svg";
import { ReactComponent as kidney } from "../../../assets/icons/kidney.svg";
import { ReactComponent as thyroid } from "../../../assets/icons/throid.svg";
import { ReactComponent as lipid } from "../../../assets/icons/lipid.svg";
import ButtonComponent from "../../atoms/Button";
import { useDispatch } from "react-redux";
import { setThisTestId } from "../../../features/test";

interface CommonlyBookedTestProps {
  covidClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const FlexSBDiv = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const ML92W80Div = styled("div")({
  marginTop: "2.5em",
  display: "flex",
  alignItems: "center",
});

const MT32Div = styled("div")({
  marginTop: "2em",
});

const FlexSBDMB13Div = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "0.8125em",
});

const PDiv = styled("div")({
  maxWidth: "1186px",
});

function HomePageCommonlyBookedTest({ covidClick }: CommonlyBookedTestProps) {
  const dispatch = useDispatch();
  return (
    <ML92W80Div>
      <PDiv>
        <FlexSBDiv>
          <Typography variant="heading1">{CommonlyBookedTest}</Typography>
        </FlexSBDiv>
        <MT32Div>
          <FlexSBDMB13Div>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={7} sm={6} md={4} lg={3} xl={3}>
                <ButtonComponent
                  onClick={() => {
                    dispatch(setThisTestId(1));
                  }}
                >
                  <ButtonComponent onClick={covidClick}>
                    <Testbox
                      component={body}
                      content={FullbodyCheck}
                      data-testid="testBox1"
                    />
                  </ButtonComponent>
                </ButtonComponent>
              </Grid>
              <Grid item xs={7} sm={6} md={4} lg={3} xl={3}>
                <ButtonComponent
                  onClick={() => {
                    dispatch(setThisTestId(2));
                  }}
                >
                  <ButtonComponent
                    onClick={covidClick}
                    data-testid="covidClick"
                  >
                    <Testbox
                      component={covid}
                      content={CovidRTPCR}
                      data-testid="testBox2"
                    />
                  </ButtonComponent>
                </ButtonComponent>
              </Grid>
              <Grid item xs={7} sm={5} md={4} lg={3} xl={3}>
                <ButtonComponent
                  onClick={() => {
                    dispatch(setThisTestId(3));
                  }}
                >
                  <ButtonComponent
                    onClick={covidClick}
                    data-testid="covidClick"
                  >
                    <Testbox
                      component={liver}
                      content={LiverFunctionTest}
                      data-testid="testBox3"
                    />
                  </ButtonComponent>
                </ButtonComponent>
              </Grid>
              <Grid item xs={7} sm={5} md={4} lg={3} xl={3}>
                <ButtonComponent
                  onClick={() => {
                    dispatch(setThisTestId(4));
                  }}
                >
                  <ButtonComponent
                    onClick={covidClick}
                    data-testid="covidClick"
                  >
                    <Testbox
                      component={blood}
                      content={CompleteBloodCount}
                      data-testid="testBox4"
                    />
                  </ButtonComponent>
                </ButtonComponent>
              </Grid>
              <Grid item xs={7} sm={5} md={4} lg={3} xl={3}>
                <ButtonComponent
                  onClick={() => {
                    dispatch(setThisTestId(5));
                  }}
                >
                  <ButtonComponent
                    onClick={covidClick}
                    data-testid="covidClick"
                  >
                    <Testbox
                      component={diabetes}
                      content={DiabetesTest}
                      data-testid="testBox5"
                    />
                  </ButtonComponent>
                </ButtonComponent>
              </Grid>
              <Grid item xs={7} sm={5} md={4} lg={3} xl={3}>
                <ButtonComponent
                  onClick={() => {
                    dispatch(setThisTestId(6));
                  }}
                >
                  <ButtonComponent
                    onClick={covidClick}
                    data-testid="covidClick"
                  >
                    <Testbox
                      component={kidney}
                      content={KidneyFunctionTest}
                      data-testid="testBox6"
                    />
                  </ButtonComponent>
                </ButtonComponent>
              </Grid>
              <Grid item xs={7} sm={5} md={4} lg={3} xl={3}>
                <ButtonComponent
                  onClick={() => {
                    dispatch(setThisTestId(7));
                  }}
                >
                  <ButtonComponent
                    onClick={covidClick}
                    data-testid="covidClick"
                  >
                    <Testbox
                      component={thyroid}
                      content={ThyroidTest}
                      data-testid="testBox7"
                    />
                  </ButtonComponent>
                </ButtonComponent>
              </Grid>
              <Grid item xs={7} sm={5} md={4} lg={3} xl={3}>
                <ButtonComponent
                  onClick={() => {
                    dispatch(setThisTestId(8));
                  }}
                >
                  <ButtonComponent
                    onClick={covidClick}
                    data-testid="covidClick"
                  >
                    <Testbox
                      component={lipid}
                      content={LipidProfile}
                      data-testid="testBox8"
                    />
                  </ButtonComponent>
                </ButtonComponent>
              </Grid>
            </Grid>
          </FlexSBDMB13Div>
        </MT32Div>
      </PDiv>
    </ML92W80Div>
  );
}

export default HomePageCommonlyBookedTest;
