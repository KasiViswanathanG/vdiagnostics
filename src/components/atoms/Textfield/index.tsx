import React from "react";
import { COLORS } from "../../theme/Colors";
import { styled } from "@mui/system";
import { fieldName } from "../../../assets/constants";
import { Stack, Typography, Input } from "@mui/material";
export interface InputFieldProps {
  placeholder?: string;
  name?: string;
  width?: string;
  value?: string;
  defaultValue?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

const TextTypography = styled(Typography)({
  color: `${COLORS.TEXT_LOW}`,
  width: "34px",
  height: "18px",
  textTransform: "none",
});

const TextInput = styled(Input)({
  color: `${COLORS.TEXT_HIGH}`,
  fontWeight: 400,
  fontSize: "14px !important",
  lineHeight: "20px",
  width: "388px",
  height: "20px",
});

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  name,
  value,
  defaultValue,
  onChange,
}) => {
  return (
    <Stack gap="10px">
      <TextTypography variant="overline2">{fieldName}</TextTypography>
      <TextInput
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
        name={name}
        value={value}
      />
    </Stack>
  );
};

export default InputField;
