import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import theme from "../../theme";
import Button from "../../atoms/Button";
import { useNavigate } from "react-router-dom";
import { cancelText, testBookingDetailsText } from "../../../assets/constants/";

const StackContainer = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0.875em 5.625em",
  backgroundColor: `${theme.palette.background.default}`,
  boxShadow: "0px -4px 6px rgba(0, 0, 0, 0.06)",
  minWidth: "fit-content",
  [theme.breakpoints.down("sm")]: {
    padding: "0.5em",
  },
});

const StackInfo = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  gap: "1.5em",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    gap: "0.5em",
  },
});

const LabDetailStack = styled(Stack)({
  flexDirection: "column",
  alignItems: "center",
  gap: "0.25em",
  [theme.breakpoints.down("sm")]: {
    gap: "0.125em",
    fontSize: "0.6em",
  },
});

const RegularText = styled(Typography)({
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.6em",
  },
});

const TestPriceStack = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "0.25em",
  [theme.breakpoints.down("sm")]: {
    gap: "0.125rem",
  },
});

const CancelButton = styled(Button)({
  width: "4.875em",
  height: "2.625em",
  padding: "0.5em 0.75em",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
  },
});

const FlowButton = styled(Button)({
  width: "13.875em",
  height: "2.625em",
  padding: "1em 0.5em",
  borderRadius: "0.5rem",
  backgroundColor: `${theme.palette.primary.main}`,
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
  },
});

const HomeButton = styled(Button)({
  height: "2.625em",
  padding: "1em 0.5em",
  borderRadius: "0.5rem",
  borderColor: `${theme.palette.primary.main}`,
  fontWeight: "400",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
  },
});

const textStyle = {
  fontFamily: "inter",
  letterSpacing: "-0.005em",
  fontWeight: "600",
};

const labDetailsTextStyle = {
  fontFamily: "inter",
  fontWeight: "400",
  color: `${theme.palette.text.disabled}`,
};

const CancelButtonText = styled(Typography)({
  color: `${theme.palette.error.main}`,
});

const FlowButtonText = styled(Typography)({
  color: `${theme.palette.background.default}`,
});

type FooterPropType = {
  testBookingDetails: number;
  flowButtonText?: string;
  // eslint-disable-next-line no-unused-vars
  handleFlowClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  selPatients?: number;
  testPrice?: string;
  totalTestsForPrice?: string;
  labName?: string;
  appointmentTime?: string;
};

const FlowTemplateFooter = ({
  testBookingDetails,
  flowButtonText,
  handleFlowClick,
  selPatients,
  labName,
  testPrice,
  totalTestsForPrice,
  appointmentTime,
}: FooterPropType) => {
  const navigate = useNavigate();
  const { patientSelected1, patientSelected2, homeButtonText } =
    testBookingDetailsText;

  return (
    <StackContainer>
      {testBookingDetails < 8 && (
        <CancelButton
          variant="text"
          data-testid="cancel-btn"
          onClick={() => navigate("/")}
        >
          <CancelButtonText
            variant="regular"
            style={textStyle}
            data-testid="cancel-btn-text"
          >
            {cancelText}
          </CancelButtonText>
        </CancelButton>
      )}
      {testBookingDetails >= 8 && <Box />}
      <StackInfo>
        {testBookingDetails === 1 && (
          <RegularText
            variant="regular"
            style={textStyle}
            data-testid="patient-sel"
          >
            {selPatients}{" "}
            {selPatients && selPatients > 1
              ? patientSelected1
              : patientSelected2}
          </RegularText>
        )}

        {testBookingDetails === 2 && (
          <LabDetailStack>
            <Typography variant="overline2">{labName}</Typography>
            <TestPriceStack>
              <Typography variant="regular" style={textStyle}>
                {testPrice}
              </Typography>
              <Typography variant="overline2" style={labDetailsTextStyle}>
                {totalTestsForPrice}
              </Typography>
            </TestPriceStack>
          </LabDetailStack>
        )}

        {testBookingDetails === 3 && (
          <RegularText variant="regular" style={textStyle}>
            {appointmentTime}
          </RegularText>
        )}

        {testBookingDetails === 8 && (
          <HomeButton
            variant="outlined"
            data-testid="home-btn"
            onClick={() => navigate("/")}
          >
            {homeButtonText}
          </HomeButton>
        )}

        <FlowButton
          variant="contained"
          onClick={handleFlowClick}
          data-testid="flow-btn"
        >
          <FlowButtonText
            variant="regular"
            style={textStyle}
            data-testid="flow-btn-text"
          >
            {flowButtonText}
          </FlowButtonText>
        </FlowButton>
      </StackInfo>
    </StackContainer>
  );
};

export default FlowTemplateFooter;
