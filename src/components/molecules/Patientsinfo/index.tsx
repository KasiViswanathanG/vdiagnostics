import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import Checkbox from "../../atoms/Checkbox";
import theme from "../../theme";
import { styled } from "@mui/system";
import { patientInfoEdit } from "../../../assets/constants";

interface PatientInfoProps {
  patientInfoDetails: string;
  patientInfoName: string;
  // eslint-disable-next-line no-unused-vars
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // eslint-disable-next-line no-unused-vars
  handleEditClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  patientId?: number;
}
const StackA = styled(Stack)({
  flexDirection: "row",
  gap: "10px",
  borderColor: `${theme.palette.background.paper}`,
  maxWidth: "573px",
  justifyContent: "space-between",
});

const StackB = styled(Stack)({
  flexDirection: "column",
  gap: "0px",
  borderColor: `${theme.palette.background.paper}`,
});

const StackC = styled(Stack)({
  flexDirection: "row",
  gap: "10px",
});

const NameTypography = styled(Typography)({
  color: `${theme.palette.text.primary}`,
  textTransform: "none",
  fontSize: "14px",
});

const DetailsTypography = styled(Typography)({
  color: `${theme.palette.text.disabled}`,
  height: "18px",
  textTransform: "none",
});

const EditButton = styled(Button)({
  color: `${theme.palette.primary.main}`,
  height: "20px",
  fontWeight: "500",
  fontSize: "0.875em",
  textTransform: "none",
});

const Patientsinfo = ({
  patientInfoName,
  patientInfoDetails,
  handleChange,
  handleEditClick,
  patientId,
}: PatientInfoProps) => {
  return (
    <StackA data-testid="stack">
      <StackC>
        <Checkbox handleChange={handleChange} value={patientId?.toString()} />
        <StackB>
          <NameTypography data-testid="name" variant="regularCaption">
            {patientInfoName}
          </NameTypography>
          <DetailsTypography
            marginTop="6px"
            data-testid="details"
            variant="overline2"
          >
            {patientInfoDetails}
          </DetailsTypography>
        </StackB>
      </StackC>
      <EditButton
        data-testid="edit"
        variant="text"
        onClick={handleEditClick}
        value={patientId}
      >
        {patientInfoEdit}
      </EditButton>
    </StackA>
  );
};
export default Patientsinfo;
