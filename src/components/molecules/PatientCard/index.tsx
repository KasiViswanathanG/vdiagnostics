import React from "react";
import {
  BorderTypography,
  FlexColumnDiv,
  FlexDiv,
  FlexSBDiv,
  MT6R9Div,
  PadCard,
  PatientDetailsProps,
} from "../../organisms/CheckoutDetail";
import { Typography, Grid } from "@mui/material";

interface PatientCardProps {
  patient: PatientDetailsProps;
}
function PatientCard({ patient }: PatientCardProps) {
  const { name, tests, testCount, eReport, testFor, gender, age, cost } =
    patient;
  return (
    <Grid>
      <PadCard>
        <FlexSBDiv>
          <FlexColumnDiv>
            <Typography
              variant="caption2"
              color="text.primary"
              gutterBottom
              data-testid={name}
            >
              {name}
            </Typography>
            {tests.map((test) => {
              return (
                <Grid key={test}>
                  <Typography
                    variant="overlineRegular"
                    color="text.primary"
                    data-testid={test}
                  >
                    {test}
                  </Typography>
                </Grid>
              );
            })}
            <Typography
              variant="overlineRegular"
              color="text.disabled"
              gutterBottom
              data-testid="testCount"
            >
              {testCount}
            </Typography>
            <Typography variant="caption2" color="green" data-testid="eReport">
              {eReport}
            </Typography>
          </FlexColumnDiv>
          <div>
            <FlexDiv>
              <Typography
                variant="overlineRegular"
                color="text.disabled"
                data-testid="testFor"
              >
                {testFor}
              </Typography>
              <BorderTypography
                variant="overlineRegular"
                color="text.disabled"
                data-testid="gender"
              >
                {gender}
              </BorderTypography>
              <Typography
                variant="overlineRegular"
                color="text.disabled"
                data-testid="age"
              >
                {age}
              </Typography>
            </FlexDiv>
            <FlexDiv>
              <MT6R9Div>
                <Typography
                  variant="captionSemibold"
                  color="text.primary"
                  data-testid="cost"
                >
                  {cost}
                </Typography>
              </MT6R9Div>
            </FlexDiv>
          </div>
        </FlexSBDiv>
      </PadCard>
      <br />
    </Grid>
  );
}

export default PatientCard;
