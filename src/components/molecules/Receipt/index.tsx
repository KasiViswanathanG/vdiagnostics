import React from "react";
import Icon from "../../atoms/Icon";
import { ReactComponent as info } from "../../../assets/icons/info.svg";
import { ReactComponent as user } from "../../../assets/icons/user.svg";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { COLORS } from "../../theme/Colors";
import {
  instructionsHeading,
  totalAmountToPay,
} from "../../../assets/constants";

const StyledPaper = styled(Paper)({
  width: "27.125em",
  minHeight: "11.875em",
  boxShadow: "0em 0em 1.625em rgba(233, 232, 237, 0.5)",
  padding: "1.5em",
});

const StyledCard = styled(Card)({
  minHeight: "8.125em",
  width: "27.125em",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  borderRadius: "0.5em",
  boxShadow: "0em 0em 1.625em rgba(233, 232, 237, 0.5)",
});

const StyledCardContent = styled(CardContent)({
  padding: "0.5em",
});

const PatientCard = styled(Card)({
  boxShadow: "none",
});

const PatientDiv = styled("div")({
  display: "flex",
});

const IconDiv = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "0.9375em",
  width: "2.5em",
  height: "2.5em",
});

const NameTestDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  paddingTop: "0.75em",
  minHeight: "2.5em",
});

const AddressAndAmountDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  paddingTop: "0.75em",
  marginTop: "0.75em",
  borderTop: "0.0625em solid #E9E8ED",
  marginBottom: "-1em",
});

const StyledAddress = styled(Typography)({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  width: "26em",
});

const InstructionsDiv = styled("div")({
  marginTop: "0.75em",
});

const StyledAccordion = styled(Accordion)({
  width: "27.125em",
  borderRadius: "0.25em",
  backgroundColor: COLORS.GREY_100,
  boxShadow: "none",
});

const StyledAccordionSummary = styled(AccordionSummary)({
  minHeight: "1.875em",
});

const AccordionSummaryDiv = styled("div")({
  maxHeight: "0.875em",
  display: "inline-flex",
  flexDirection: "row",
});

const StyledAccordionDetails = styled(AccordionDetails)({
  margin: "-0.03125em 3em 0.25em 0em",
});

export interface PatientProps {
  name: string;
  tests: string[];
}

interface ReceiptProps {
  patients: PatientProps[];
  address: string;
  total: number;
  instructions: string;
}

function Receipt({ patients, address, total, instructions }: ReceiptProps) {
  return (
    <StyledPaper>
      <StyledCard>
        <StyledCardContent>
          <PatientCard>
            {patients.map((patient: PatientProps, index: number) => {
              return (
                <PatientDiv key={index}>
                  <IconDiv>
                    <Icon component={user} />
                  </IconDiv>
                  <NameTestDiv>
                    <Typography
                      variant="caption2"
                      color="text.primary"
                      data-testid={patient.name}
                    >
                      {patient.name}
                    </Typography>
                    {patient.tests.map((test) => {
                      return (
                        <Typography
                          key={index}
                          variant="overline"
                          color="text.disabled"
                          data-testid={test}
                        >
                          {test}
                        </Typography>
                      );
                    })}
                  </NameTestDiv>
                </PatientDiv>
              );
            })}
          </PatientCard>
          <AddressAndAmountDiv>
            <StyledAddress
              variant="captionRegular"
              color="text.secondary"
              data-testid="address"
            >
              {address}
            </StyledAddress>
            <Typography
              variant="caption2"
              color="text.secondary"
              data-testid="total"
            >
              {totalAmountToPay}
              {total}
            </Typography>
          </AddressAndAmountDiv>
        </StyledCardContent>
      </StyledCard>
      <InstructionsDiv>
        <StyledAccordion disableGutters>
          <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
            <AccordionSummaryDiv>
              <Icon component={info} />
              <Typography
                color="primary.dark"
                variant="overline2"
                data-testid="instructionsHeading"
              >
                {instructionsHeading}
              </Typography>
            </AccordionSummaryDiv>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <Typography
              variant="captionRegular"
              color="text.secondary"
              data-testid="instructions"
            >
              {instructions}
            </Typography>
          </StyledAccordionDetails>
        </StyledAccordion>
      </InstructionsDiv>
    </StyledPaper>
  );
}

export default Receipt;
