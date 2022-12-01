import { styled } from "@mui/material";
import React from "react";
import ReportDetail from "../../molecules/ReportDetailCard";
import theme from "../../theme";
import {
  SubTitle,
  HeadingText,
  StackContainer,
  StackItem,
} from "../MyAppointment/index";

type itemsType = {
  isCompleted: boolean;
  labName: string;
  testName: string;
  dateTime: string;
};

export type ReportTemplateType = {
  recent: string;
  upcoming_items: itemsType[];
  heading: string;
  recent_items: itemsType[];
  upcoming: string;
};

const MDiv = styled("div")({
  [theme.breakpoints.down("xs")]: {
    marginTop: "2.5em",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "2.5em",
  },
  [theme.breakpoints.down("md")]: {
    marginTop: "2.5em",
  },
  [theme.breakpoints.up("lg")]: {
    margin: "2.5em 0em 0em 1.6em",
  },
  [theme.breakpoints.up("xl")]: {
    margin: "2.5em 0em 0em 17em",
  },
});

const MyReport = () => {
  const testDetails: ReportTemplateType = {
    heading: "Reports",
    upcoming: "Upcoming Reports",
    recent: "Recent Reports",
    upcoming_items: [
      {
        isCompleted: false,
        labName: "Los Altos Center Lab",
        testName: "Covid RTPCR Test",
        dateTime: "Pending",
      },
    ],
    recent_items: [
      {
        isCompleted: true,
        labName: "Los Altos Center Lab",
        testName: "Covid RTPCR Test",
        dateTime: "02 Feb 2022 | 8.30 AM",
      },
      {
        isCompleted: true,
        labName: "Los Altos Center Lab",
        testName: "Covid RTPCR Test",
        dateTime: "02 Feb 2022 | 8.30 AM",
      },
    ],
  };

  return (
    <MDiv>
      <StackContainer>
        <HeadingText variant="h1" data-testid="heading-rep">
          {testDetails.heading}
        </HeadingText>
        <StackItem>
          <SubTitle variant="subtitle1" data-testid="upcoming-rep">
            {testDetails.upcoming}
          </SubTitle>
          {testDetails.upcoming_items.map(
            (eachItem: itemsType, index: number) => (
              <ReportDetail key={index} {...eachItem}></ReportDetail>
            ),
          )}
        </StackItem>
        <StackItem>
          <SubTitle variant="subtitle1" data-testid="recent-rep">
            {testDetails.recent}
          </SubTitle>
          {testDetails.recent_items.map(
            (eachItem: itemsType, index: number) => (
              <ReportDetail key={index} {...eachItem}></ReportDetail>
            ),
          )}
        </StackItem>
      </StackContainer>
    </MDiv>
  );
};

export default MyReport;
