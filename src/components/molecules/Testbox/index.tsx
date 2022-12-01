import React from "react";
import Icon from "../../atoms/Icon";
import { Stack, Typography, SvgIconProps } from "@mui/material";
import theme from "../../theme";
import { styled } from "@mui/system";

const StackA = styled(Stack)({
  flexDirection: "column",
  width: "283px",
  height: "116px",
  gap: "10px",
  background: `${theme.palette.background.default}`,
  border: "1px solid",
  borderColor: `${theme.palette.grey[50]}`,
  alignItems: "center",
});
const IconA = styled("div")({
  width: "50px",
  height: "50px",
  backgroundColor: `${theme.palette.primary.contrastText}`,
  borderRadius: "8px",
  padding: "0.5em 0em 0em 0.5em",
  justifyContent: "center",
  marginTop: "1em",
});

const TestBoxTypography = styled(Typography)({
  color: `${theme.palette.text.secondary}`,
  textTransform: "none",
});
interface TestBoxProps extends SvgIconProps {
  component:
    | React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
          title?: string;
        }
      >
    | undefined;
  content: string;
}

const StyledIcon = styled(Icon)({
  width: "100%",
  height: "100%",
});

const Testbox = ({ component, content }: TestBoxProps) => {
  return (
    <StackA>
      <IconA>
        <StyledIcon component={component} inheritViewBox={true}></StyledIcon>
      </IconA>
      <TestBoxTypography variant="captionMedium" data-testid="Fullbody">
        {content}
      </TestBoxTypography>
    </StackA>
  );
};

export default Testbox;
