import React from "react";
import Icon from "../../atoms/Icon";
import theme from "../../theme";
import { styled } from "@mui/system";
import { Stack, Typography, SvgIconProps } from "@mui/material";
import { COLORS } from "../../theme/Colors";
const StackA = styled(Stack)({
  flexDirection: "row",
  gap: "4px",
  borderColor: `${theme.palette.grey[50]}`,
  borderRadius: "12px",
  width: "100px",
});
const IconA = styled(Icon)({
  width: "44px",
  height: "44px",
  backgroundColor: COLORS.BETA_PURPLE,
  borderRadius: "8px",
});
const FeatureTypography = styled(Typography)({
  color: `${theme.palette.text.primary}`,
  width: "64px",
  height: "36px",
  textTransform: "none",
  marginTop: "6px",
  lineHeight: "18px",
});

interface FeatureboxProps extends SvgIconProps {
  component:
    | React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
          title?: string;
        }
      >
    | undefined;
  content: string;
}

const Feauturebox = (props: FeatureboxProps) => {
  return (
    <StackA data-testid="stack">
      <IconA
        component={props.component}
        inheritViewBox={true}
        fontSize="large"
        sx={{ fill: "none" }}
      ></IconA>
      <FeatureTypography variant="overline2">{props.content}</FeatureTypography>
    </StackA>
  );
};
export default Feauturebox;
