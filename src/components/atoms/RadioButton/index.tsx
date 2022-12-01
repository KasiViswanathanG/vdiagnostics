import Radio, { RadioProps } from "@mui/material/Radio";
import React from "react";
import { ReactComponent as radioFalseIcon } from "../../../assets/radiobuttons.svg";
import { ReactComponent as radioTrueIcon } from "../../../assets/checkedradiobutton.svg";
import { SvgIcon } from "@mui/material";
interface Props extends RadioProps {
  value?: string;
}

const RadioButton = ({ sx, value, ...remProps }: Props) => {
  return (
    <Radio
      data-testid="radioButton"
      icon={<SvgIcon component={radioFalseIcon} sx={{ fill: "none" }} />}
      checkedIcon={<SvgIcon component={radioTrueIcon} sx={{ fill: "none" }} />}
      value={value}
      sx={{
        ...sx,
      }}
      {...remProps}
    />
  );
};

export default RadioButton;
