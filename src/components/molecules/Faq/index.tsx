import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  styled,
  Typography,
} from "@mui/material";
import { ReactComponent as expandIcon } from "../../../assets/icons/chevron-down.svg";
import { COLORS } from "../../theme/Colors";
import React from "react";
import Icon from "../../atoms/Icon";

interface Props {
  label: string;
  content: string;
}

const StyledAccordion = styled(Accordion)({
  boxShadow: "0px 0px 1.625em rgba(233, 232, 237, 0.5);",
  padding: "0.625em",
});
const Faq = ({ label, content }: Props) => {
  return (
    <StyledAccordion data-testid="faq">
      <AccordionSummary expandIcon={<Icon component={expandIcon} />}>
        <Typography
          variant="bodyRegular"
          sx={{ color: `${COLORS.TEXT_MEDIUM}` }}
        >
          {label}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{content}</Typography>
      </AccordionDetails>
    </StyledAccordion>
  );
};

export default Faq;
