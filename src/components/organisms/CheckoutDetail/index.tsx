import React from "react";
import { Card, Grid, Paper, styled, Typography } from "@mui/material";
import Icon from "../../atoms/Icon";
import { ReactComponent as user } from "../../../assets/icons/user-1.svg";
import {
  itemTotal,
  discount,
  grandTotal,
  patientDetails,
  leftBraces,
  rightBraces,
  dollarSign,
  dollarSignNeg,
} from "../../../assets/constants";
import AddressCard from "../../molecules/AddressCard";
import PatientCard from "../../molecules/PatientCard";
import TimeSlotCard from "../../molecules/TimeSlotCard";

export const StyledPaper = styled(Paper)({
  boxShadow: "none",
  border: "0.0625em solid #E9E8ED",
  borderRadius: "0.5em",
  width: "27.125em",
  padding: "1.5em 4.6875em",
  marginBottom: "2em",
});

export const StyledCard1 = styled(Card)({
  width: "27.125em",
  border: "0.0625em solid #E9E8ED",
  borderRadius: "0.5em",
  padding: "0.25em",
  gap: "0.75em",
  boxShadow: "none",
});

export const StyledCard2 = styled(Card)({
  width: "26.125em",
  padding: "0.75em",
  gap: "0.75em",
  boxShadow: "0em 0em 0.75em rgba(233, 232, 237, 0.53)",
  borderRadius: "0.75em",
});

const StyledCard3 = styled(Card)({
  width: "25.5em",
  border: "0.0625em solid #E9E8ED",
  borderRadius: "0.75em",
  padding: "1em",
  gap: "0.5em",
  boxShadow: "0em 0em 0.75em rgba(233, 232, 237, 0.53)",
});

export const StyledCard4 = styled(Card)({
  width: "26em",
  border: "0.0625em solid #E9E8ED",
  borderRadius: "0.5em",
  padding: "0.75em",
  gap: "0.75em",
  boxShadow: "none",
});

export const PadCard = styled(Card)({
  boxShadow: "none",
  paddingTop: "0.6875em",
});

export const FlexDiv = styled("div")({
  display: "flex",
});

export const FlexSBDiv = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

export const FlexColumnDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
});

export const PTL9Div = styled("div")({
  padding: "0em 0em 0em 0.5625em",
});

export const MTN3Div = styled("div")({
  marginTop: "-0.1875em",
});

export const MT2Div = styled("div")({
  marginTop: "0.125em",
});

export const PL3Div = styled("div")({
  paddingLeft: "0.1875em",
});

export const StyledDiv = styled("div")({
  display: "flex",
  borderBottom: "0.0625em solid #E9E8ED",
  justifyContent: "space-between",
  margin: "0.1875em 0em 0.9375em 0em",
  paddingBottom: "0.125em",
});

export const PadTR10Div = styled("div")({
  padding: "0.725em 0em 0em 0.625em",
});

export const BorderDiv = styled("div")({
  borderBottom: "0.0625em solid #E9E8ED",
  display: "flex",
});

export const LineDiv = styled("div")({
  margin: "0em 0.9375em",
  borderLeft: "0.0625em solid #E9E8ED",
});

export const MT6R9Div = styled("div")({
  margin: "0.375em 0.5625em 0em 0em",
});

export const IconDiv = styled("div")({
  border: "0.0625em solid #E9E8ED",
  borderRadius: "50%",
});

export const StyledIcon = styled(Icon)({
  margin: "-0.07em 0em 0.18em 0.10em",
});

export const BorderTypography = styled(Typography)({
  padding: "0em 0.3125em 0em 0.3125em",
  margin: "0em 0.3125em 0em 0.3125em",
  borderLeft: "0.0625em solid #E9E8ED",
  borderRight: "0.0625em solid #E9E8ED",
});

export interface PatientDetailsProps {
  name: string;
  tests: string[];
  testCount: string;
  eReport: string;
  testFor: string;
  gender: string;
  age: number;
  cost: string;
}

export interface CheckoutDetailProps {
  labIcon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
    }
  >;
  lab: string;
  itemTotalVal: number;
  discountVal: number;
  grandTotalVal: number;
  noOfPatients: number;
  patients: PatientDetailsProps[];
  date: string;
  time: string;
  addressType: string;
  address: string;
  timeChange?: React.MouseEventHandler<HTMLButtonElement>;
  addressChange?: React.MouseEventHandler<HTMLButtonElement>;
}

function CheckoutDetail({ ...props }: CheckoutDetailProps) {
  const {
    labIcon,
    lab,
    itemTotalVal,
    discountVal,
    grandTotalVal,
    noOfPatients,
    patients,
    date,
    time,
    addressType,
    address,
    timeChange,
    addressChange,
  } = props;
  return (
    <>
      <StyledPaper elevation={1}>
        <StyledCard1>
          <FlexDiv>
            <IconDiv>
              <StyledIcon
                component={labIcon}
                fontSize="large"
                data-testid="labIcon"
              />
            </IconDiv>
            <PadTR10Div>
              <Typography
                variant="bodyMedium"
                color="text.primary"
                data-testid="lab"
              >
                {lab}
              </Typography>
            </PadTR10Div>
          </FlexDiv>
        </StyledCard1>
        <br />
        <StyledCard2>
          <FlexSBDiv>
            <FlexColumnDiv>
              <Typography
                variant="captionRegular"
                color="text.secondary"
                data-testid="itemTotal"
                gutterBottom
              >
                {itemTotal}
              </Typography>
              <Typography
                variant="captionRegular"
                color="text.secondary"
                data-testid="discount"
                gutterBottom
              >
                {discount}
              </Typography>
              <Typography
                variant="captionRegular"
                color="text.primary"
                data-testid="grandTotal"
                gutterBottom
              >
                {grandTotal}
              </Typography>
            </FlexColumnDiv>
            <FlexColumnDiv>
              <Typography
                variant="captionRegular"
                color="text.secondary"
                data-testid="itemTotalVal"
                gutterBottom
              >
                {dollarSign}
                {itemTotalVal}
              </Typography>
              <Typography
                variant="captionRegular"
                color="green"
                data-testid="discountVal"
                gutterBottom
              >
                {dollarSignNeg}
                {discountVal}
              </Typography>
              <Typography
                variant="caption"
                data-testid="grandTotalVal"
                gutterBottom
              >
                {dollarSign}
                {grandTotalVal}
              </Typography>
            </FlexColumnDiv>
          </FlexSBDiv>
        </StyledCard2>
        <br />
        <StyledCard3>
          <BorderDiv>
            <Icon component={user} />
            <Typography
              variant="overline2"
              color="text.disabled"
              data-testid="noOfPatients"
            >
              {patientDetails} {leftBraces}
              {noOfPatients}
              {rightBraces}
            </Typography>
          </BorderDiv>
          <div>
            {patients.map((patient) => {
              return (
                <Grid key={patient.name}>
                  <PatientCard patient={patient} />
                </Grid>
              );
            })}
          </div>
        </StyledCard3>
        <br />
        <TimeSlotCard date={date} time={time} onClick={timeChange} />
        <br />
        <AddressCard
          addressType={addressType}
          address={address}
          onClick={addressChange}
        />
      </StyledPaper>
    </>
  );
}

export default CheckoutDetail;
