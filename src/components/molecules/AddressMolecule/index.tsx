import React from "react";
import theme from "../../theme";
import { styled } from "@mui/system";
import RadioButton from "../../atoms/RadioButton";
import { Stack, Typography } from "@mui/material";

const StackA = styled(Stack)({
  flexDirection: "column",
  gap: "14px",
  borderRadius: "8px",
  width: "535px",
  border: `1px solid ${theme.palette.background.default}`,
  padding: "12px 12px 18px",
  backgroundColor: `${theme.palette.background.default}`,
  filter: "drop-shadow(0px 0px 26px rgba(233, 232, 237, 0.5))",
});

const StackB = styled(Stack)({
  flexDirection: "row",
  alignItems: "start",
  justifyContent: "space-between",
});

const FeatureTypography = styled(Typography)({
  color: `${theme.palette.text.secondary}`,
  textTransform: "none",
  padding: "3px 1px",
});

const AddressType = styled(Typography)({
  color: `${theme.palette.text.primary}`,
  textTransform: "none",
});

const AddressDetails = styled(Typography)({
  color: `${theme.palette.text.secondary}`,
  textTransform: "none",
  maxWidth: "258px",
  lineHeight: "20px",
});

interface AddressMoleculeProps {
  house?: string;
  road?: string;
  cityState?: string;
  zipcode?: string;
  radioValue?: number;
  addressDefault?: string;
  addressType?: string;
}

const AddressMolecule = ({
  addressDefault,
  road,
  addressType,
  house,
  cityState,
  zipcode,
  radioValue,
}: AddressMoleculeProps) => {
  const r = radioValue?.toString();
  return (
    <StackA data-testid="stack">
      <FeatureTypography variant="overline2">
        {addressDefault}
      </FeatureTypography>
      <AddressType variant="captionMedium">{addressType}</AddressType>
      <StackB>
        <AddressDetails variant="regularCaption">
          {house} {road} {cityState} - {zipcode}
        </AddressDetails>
        <RadioButton value={r}></RadioButton>
      </StackB>
    </StackA>
  );
};
export default AddressMolecule;
