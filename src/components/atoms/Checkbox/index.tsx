import React from "react";
import { Checkbox as MuiCheckbox } from "@mui/material";

type checkboxProp = {
  // eslint-disable-next-line no-unused-vars
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

const Checkbox = ({ handleChange, value }: checkboxProp) => {
  return (
    <MuiCheckbox
      sx={{
        width: "15px",
        height: "15px",
        "&.Mui-checked": {
          color: "#9E62B3",
        },
      }}
      value={value}
      color="secondary"
      data-testid="checkboxes"
      onChange={handleChange}
    />
  );
};
export default Checkbox;
