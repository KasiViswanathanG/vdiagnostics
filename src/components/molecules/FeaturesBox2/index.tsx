import React from "react";
import Icon from "../../atoms/Icon";
import theme from "../../theme";
import { styled } from "@mui/system";
import { Typography, SvgIconProps, Card } from "@mui/material";
import { COLORS } from "../../theme/Colors";

const StackA = styled(Card)({
  flexDirection: "row",
  gap: "30px",
  borderColor: `${theme.palette.background.paper}`,
  borderRadius: "8px",
  width: "23.875em",
  border: "1px solid white",
  boxShadow: "0px 0px 20px rgba(125, 125, 125, 0.08)",
});
const IconA = styled(Icon)({
  width: "56px",
  height: "56px",
  backgroundColor: COLORS.BETA_PURPLE,
  borderRadius: "25px",
  marginLeft: "15px",
  marginTop: "10px",
});

const FeatureTypography = styled(Typography)({
  color: `${theme.palette.text.secondary}`,
  marginTop: "30px",
  textTransform: "none",
});

interface FeatureBoxProps extends SvgIconProps {
  component:
    | React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
          title?: string;
        }
      >
    | undefined;
  content: string;
}

const StyledDiv = styled("div")({
  margin: "28px 0px 0px 24px",
});

const Feauturebox2 = ({ component, content }: FeatureBoxProps) => {
  return (
    <StackA data-testid="stack">
      <div style={{ display: "flex" }}>
        <div>
          <IconA
            component={component}
            inheritViewBox={true}
            fontSize="large"
          ></IconA>
        </div>
        <StyledDiv>
          <FeatureTypography variant="bodyMedium2">{content}</FeatureTypography>
        </StyledDiv>
      </div>
    </StackA>
  );
};
export default Feauturebox2;
