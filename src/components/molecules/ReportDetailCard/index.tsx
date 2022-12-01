import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import PDF_completed from "../../../assets/icons/pdf_completed.png";
import PDF_upcoming from "../../../assets/icons/pdf_upcoming.png";
import { ReactComponent as download } from "../../../assets/icons/download.svg";
import { ReactComponent as clock } from "../../../assets/icons/clock.svg";
import { styled } from "@mui/system";
import theme from "../../theme";
import Image from "../../atoms/Image";
import Icon from "../../atoms/Icon";

interface TestDetailProps {
  isCompleted: boolean;
  labName: string;
  testName: string;
  dateTime: string;
}

const BoxCard = styled(Box)({
  width: "36.4375em",
  padding: "0.75em 1em",
  border: "0.5px solid",
  borderColor: `${theme.palette.grey[50]}`,
  backgroundColor: `${theme.palette.background.default}`,
  boxShadow: "0px 0px 12px rgba(233, 232, 237, 0.53)",
  borderRadius: "0.5em",
});

const StackContainer = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  gap: "1.875em",
});

const IconStack = styled(Stack)({
  alignItems: "center",
  justifyContent: "center",
});

const Content = styled(Stack)({
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between",
  width: "32.1875em",
});

const TextStack = styled(Stack)({
  flexDirection: "column",
  gap: "0.25em",
  alignItems: "flex-start",
});

const LabName = styled(Typography)({
  color: `${theme.palette.text.secondary}`,
});

const DateTime = styled(Typography)({
  color: `${theme.palette.text.disabled}`,
});

const Pending = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  gap: "0.25em",
});

const ReportDetail = ({
  isCompleted,
  labName,
  testName,
  dateTime,
}: TestDetailProps) => {
  return (
    <BoxCard>
      <StackContainer>
        <IconStack>
          {isCompleted ? (
            <Image src={PDF_completed} />
          ) : (
            <Image src={PDF_upcoming} />
          )}
        </IconStack>
        <Content>
          <TextStack>
            <LabName variant="caption" data-testid="heading">
              {labName}
            </LabName>
            <Typography variant="regularCaption">{testName}</Typography>
            {isCompleted ? (
              <DateTime variant="overlineRegular">{dateTime}</DateTime>
            ) : (
              <Pending>
                <Icon component={clock} color="error" />
                <Typography variant="regularCaption" color="#DA4D4D">
                  {dateTime}
                </Typography>
              </Pending>
            )}
          </TextStack>
          <Icon component={download} />
        </Content>
      </StackContainer>
    </BoxCard>
  );
};

export default ReportDetail;
