import { Input, Stack, Typography, InputProps } from "@mui/material";
import { styled } from "@mui/system";
import { COLORS } from "../../theme/Colors";
import React from "react";

interface Props extends InputProps {
  label: string;
  placeholder: string;
  width?: string;
  handleChange: Function;
  id: string;
}

const TextTypography = styled(Typography)({
  color: `${COLORS.TEXT_LOW}`,
  fontSize: "12px",
  lineHeight: "18px",
  textTransform: "none",
  marginTop: "16px",
});

const InputField = ({ label, placeholder, width, handleChange, id }: Props) => {
  return (
    <Stack gap="12px" data-testid="inputfield" width={width}>
      <TextTypography variant="overline2">{label}</TextTypography>
      <Input
        placeholder={`${placeholder}`}
        onChange={() => {
          handleChange();
        }}
        id={id}
      ></Input>
    </Stack>
  );
};

export default InputField;
