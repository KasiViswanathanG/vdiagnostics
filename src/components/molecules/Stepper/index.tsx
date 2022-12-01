import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { COLORS } from "../../theme/Colors/index";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

interface Props {
  steps: Array<string>;
  activeStep: number;
}

const CustomStepLabel = styled(StepLabel)({
  "& .MuiStepIcon-root": {
    display: "none",
  },
});
export default function HorizontalLinearStepper({ steps, activeStep }: Props) {
  return (
    <Box width={"50%"}>
      <Stepper activeStep={activeStep} data-testid="stepper">
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <CustomStepLabel>
                <Typography
                  variant={activeStep === index ? "caption" : "regularCaption"}
                  sx={{
                    color: `${
                      activeStep === index ? COLORS.TEXT_HIGH : COLORS.TEXT_LOW
                    }`,
                  }}
                >
                  {label}
                </Typography>
              </CustomStepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
