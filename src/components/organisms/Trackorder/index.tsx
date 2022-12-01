import React from "react";
import { Stack, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";
import theme from "../../theme";
import Icon from "../../atoms/Icon";
import { ReactComponent as tickbox } from "../../../assets/icons/Shape11.svg";
import { ReactComponent as Lab } from "../../../assets/icons/lab-technician3.svg";
import { ReactComponent as Pickup } from "../../../assets/icons/pickup.svg";
import { ReactComponent as Test } from "../../../assets/icons/test conducted.svg";
import { ReactComponent as ReportReady } from "../../../assets/icons/file-text.svg";
import { ReactComponent as LineDark } from "../../../assets/icons/Line 4.svg";
import { ReactComponent as Line } from "../../../assets/icons/Line 5.svg";
import { ReactComponent as Technician } from "../../../assets/icons/Rectangle.svg";
import {
  trackPlaced,
  trackLab,
  trackExamined,
  trackReport,
  trackSample,
  trackPlacedText,
  trackLabText,
  trackExamText,
  trackSampleText,
  trackPlacedOrder,
} from "../../../assets/constants";
import { COLORS } from "../../theme/Colors";

const StackA = styled(Stack)({
  flexDirection: "column",
  border: "1px solid",
  borderColor: `${theme.palette.grey[50]}`,
  borderRadius: "8px",
  backgroundColor: `${theme.palette.background.default}`,
  maxHeight: "490px",
  width: "583px",
});

const StackB = styled(Stack)({
  flexDirection: "column",
  gap: "0px",
});

const StackC = styled(Stack)({
  flexDirection: "row",
  gap: "10px",
});

const StackD = styled(Stack)({
  flexDirection: "column",
  marginTop: "32px",
});

const StackE = styled(Stack)({
  flexDirection: "row",
  gap: "5px",
  maxWidth: "116px",
  backgroundColor: COLORS.GAMMA_GREY,
});

const ContainerA = styled(Container)({
  marginTop: "32px",
  marginLeft: "32px",
});

const IconA = styled(Icon)({
  width: "44px",
  height: "44px",
  backgroundColor: COLORS.BETA_PURPLE_800,
  borderRadius: "25px",
});

const IconB = styled(Icon)({
  width: "44px",
  height: "44px",
  backgroundColor: COLORS.WHITE,
  borderRadius: "25px",
  border: "0.5px",
  borderStyle: "solid",
  borderColor: COLORS.BETA_PURPLE_800,
});

const IconC = styled(Icon)({
  width: "44px",
  height: "44px",
  backgroundColor: COLORS.WHITE,
  borderRadius: "25px",
  border: "0.5px",
  borderStyle: "solid",
  borderColor: COLORS.GREY_100,
});

const IconD = styled(Icon)({
  width: "20px",
  height: "20px",
});

const NameTypography = styled(Typography)({
  color: `${theme.palette.text.secondary}`,
  textTransform: "none",
});

const DetailsTypography = styled(Typography)({
  color: `${theme.palette.text.disabled}`,
  height: "18px",
  textTransform: "none",
});

const OrderText = styled(Typography)({
  color: `${theme.palette.text.primary}`,
  lineHeight: "18px",
});

const Trackorder = () => {
  return (
    <StackA data-testid="stack">
      <ContainerA>
        <OrderText variant="bodyMedium">{trackPlacedOrder}</OrderText>
        <StackD>
          <StackC data-testid="stack2">
            <IconA component={tickbox} inheritViewBox={true} fontSize="large" />
            <StackB data-testid="stack1">
              <NameTypography variant="bodyMedium">
                {trackPlaced}
              </NameTypography>
              <DetailsTypography variant="overlineRegular">
                {trackPlacedText}
              </DetailsTypography>
            </StackB>
          </StackC>
          <Stack
            sx={{
              marginLeft: "22px",
            }}
          >
            <Icon
              component={LineDark}
              inheritViewBox={true}
              fontSize="large"
            ></Icon>
          </Stack>
          <StackC>
            <IconB component={Lab} inheritViewBox={true} fontSize="large" />
            <StackB>
              <NameTypography variant="bodyMedium">{trackLab}</NameTypography>
              <StackE>
                <IconD
                  component={Technician}
                  inheritViewBox={true}
                  fontSize="large"
                ></IconD>
                <DetailsTypography marginTop="3px" variant="overlineRegular">
                  {trackLabText}
                </DetailsTypography>
              </StackE>
            </StackB>
          </StackC>
          <Stack
            sx={{
              marginLeft: "22px",
            }}
          >
            <Icon
              component={Line}
              inheritViewBox={true}
              fontSize="large"
            ></Icon>
          </Stack>
          <StackC>
            <IconC component={Pickup} inheritViewBox={true} fontSize="large" />
            <StackB>
              <NameTypography variant="bodyMedium">
                {trackSample}
              </NameTypography>
              <DetailsTypography variant="overlineRegular">
                {trackSampleText}
              </DetailsTypography>
            </StackB>
          </StackC>
          <Stack
            sx={{
              marginLeft: "22px",
            }}
          >
            <Icon
              component={Line}
              inheritViewBox={true}
              fontSize="large"
            ></Icon>
          </Stack>
          <StackC>
            <IconC component={Test} inheritViewBox={true} fontSize="large" />
            <StackB>
              <NameTypography variant="bodyMedium">
                {trackExamined}
              </NameTypography>
              <DetailsTypography variant="overlineRegular">
                {trackExamText}
              </DetailsTypography>
            </StackB>
          </StackC>
          <Stack
            sx={{
              marginLeft: "22px",
            }}
          >
            <Icon
              component={Line}
              inheritViewBox={true}
              fontSize="large"
            ></Icon>
          </Stack>
          <StackC>
            <IconC
              component={ReportReady}
              inheritViewBox={true}
              fontSize="large"
            />
            <StackB>
              <NameTypography marginTop="3px" variant="bodyMedium">
                {trackReport}
              </NameTypography>
            </StackB>
          </StackC>
        </StackD>
      </ContainerA>
    </StackA>
  );
};

export default Trackorder;
