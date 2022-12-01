import React from "react";
import Icon from "../../atoms/Icon";
import theme from "../../theme";
import { styled } from "@mui/system";
import { Stack, Typography, SvgIconProps , Button} from "@mui/material";
import { ReactComponent as chevron } from "../../../assets/icons/chevron-right.svg";

const StackA = styled(Stack)({
  flexDirection: "row",
  gap: "10px",
});

const StackB = styled(Stack)({
  flexDirection: "column",
  gap: "4px",
  marginTop: "-3px",
});

const StackC = styled(Stack)({
  flexDirection: "row",
  alignItems: "start",
  justifyContent: "space-between",
  width: "36.41vw",
});

const IconA = styled(Icon)({
  width: "2.1645vw",
  height: "2.1645vw",
});

const IconB = styled(Icon)({
  width: "1.2987vw",
  height: "1.2987vw",
});

const FeatureTypography = styled(Typography)({
  color: `${theme.palette.text.secondary}`,
});
const FeatureTypography1 = styled(Typography)({
  color: `${theme.palette.text.disabled}`,
});
interface FeatureboxProps extends SvgIconProps {
  component?:
    | React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
          title?: string;
        }
      >
    ;
  content1: string;
  content2?: string;
  onClick?: () => void;
}

const Trackordermolecule = (props: FeatureboxProps) => {
  return (
    <StackC onClick={props.onClick}>
      <StackA data-testid="stack">
        <IconA
          onClick={props.onClick}
          component={props.component}
          inheritViewBox={true}
          fontSize="large"
          sx={{ fill: "none" }}
        ></IconA>
        <StackB>
          <FeatureTypography
            data-testid="heading"
            onClick={props.onClick}
            variant="bodyMedium"
          >
            {props.content1}
          </FeatureTypography>
          <FeatureTypography1
            data-testid="nameText"
            onClick={props.onClick}
            variant="overlineRegular"
          >
            {props.content2}
          </FeatureTypography1>
        </StackB>
      </StackA>
      <Button onClick={props.onClick}>
        <IconB component={chevron} sx={{ fill: "none" }}></IconB>
      </Button>
    </StackC>
  );
};
export default Trackordermolecule;
