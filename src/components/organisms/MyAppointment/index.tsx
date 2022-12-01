import React, { useEffect, useState } from "react";
import { Typography, Stack } from "@mui/material";
import { styled } from "@mui/system";
import theme from "../../theme";
import TestDetail from "../../molecules/TestDetailCard";
import {
  getAppointments,
  getPatientById,
  getTestById,
} from "../../../services";
import { useSelector } from "react-redux";
import { ReactComponent as body } from "../../../assets/icons/body.svg";
import { ReactComponent as covid } from "../../../assets/icons/covid.svg";
import { ReactComponent as liver } from "../../../assets/icons/liver.svg";
import { ReactComponent as blood } from "../../../assets/icons/bloodtest.svg";
import { ReactComponent as diabetes } from "../../../assets/icons/diabetestest.svg";
import { ReactComponent as kidney } from "../../../assets/icons/kidney.svg";
import { ReactComponent as thyroid } from "../../../assets/icons/throid.svg";
import { ReactComponent as lipid } from "../../../assets/icons/lipid.svg";

export const SubTitle = styled(Typography)({
  color: `${theme.palette.text.secondary}`,
});

export const HeadingText = styled(Typography)({
  fontWeight: "700",
  color: `${theme.palette.text.secondary}`,
});

export const StackContainer = styled(Stack)({
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "2.5em",
  marginLeft: "4.5em",
});

export const StackItem = styled(Stack)({
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "2.25em",
});

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

type appointmentType = {
  month: string;
  date: number;
  day: string;
  time: string;
  patients: number[];
  testId: number;
  labId: number;
  addressId: number;
  userId: number;
  id: number;
};

type itemsType = {
  testDisplayIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  testName: string;
  labName: string;
  patientName: string;
  time: string;
};

type AppointmentTemplateType = {
  heading: string;
  upcoming: string;
  recent: string;
  upcoming_items: itemsType[];
  recent_items: itemsType[];
};

const MyAppointment = () => {
  const [upcomingUserAppointments, setUpcomingUserAppointments] =
    useState<itemsType[]>();
  const [recentUserAppointments, setRecentUserAppointments] =
    useState<itemsType[]>();
  const thisUserId = useSelector((state: any) => state.user.thisUserId);
  let thisAppointments: appointmentType[] = [];
  let upcomingAppointments: itemsType[] = [];
  let recentAppointments: itemsType[] = [];
  let thisDisplayIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  let thisTestName: string;
  let thisLabName: string;
  let thisPatientsName: string;
  let thisTime: string;
  const getUserAppointments = async () => {
    const appointmentsData = await getAppointments();
    for (let appointmentData of appointmentsData) {
      if (appointmentData.userId === thisUserId) {
        thisAppointments.push(appointmentData);
      }
    }

    for (let thisAppointment of thisAppointments) {
      if (thisAppointment.testId === 1) {
        thisDisplayIcon = body;
      } else if (thisAppointment.testId === 2) {
        thisDisplayIcon = covid;
      } else if (thisAppointment.testId === 3) {
        thisDisplayIcon = liver;
      } else if (thisAppointment.testId === 4) {
        thisDisplayIcon = blood;
      } else if (thisAppointment.testId === 5) {
        thisDisplayIcon = diabetes;
      } else if (thisAppointment.testId === 6) {
        thisDisplayIcon = kidney;
      } else if (thisAppointment.testId === 7) {
        thisDisplayIcon = thyroid;
      } else if (thisAppointment.testId === 8) {
        thisDisplayIcon = lipid;
      }
      thisTestName = (await getTestById(thisAppointment.testId)).name;
      thisLabName = "Los Altos Center Lab";
      thisTime = `${thisAppointment.day.substring(
        0,
        3
      )}, ${thisAppointment.month.substring(0, 3)} ${thisAppointment.time}`;
      let pat: string = "";
      for (let id of thisAppointment.patients) {
        pat = pat + " " + (await getPatientById(id.toString())).name;
      }
      thisPatientsName = pat;
      let thisItem: itemsType = {
        testDisplayIcon: thisDisplayIcon,
        testName: thisTestName,
        labName: thisLabName,
        patientName: thisPatientsName,
        time: thisTime,
      };
      const thisDate = new Date(Date.now());
      const thisYear = new Date().getFullYear();
      let appointmentDate = new Date(
        `${thisAppointment.month} ${thisAppointment.date}, ${thisYear} 0${thisAppointment.time[0]}:00:00`
      );
      if (appointmentDate.getTime() > thisDate.getTime()) {
        upcomingAppointments.push(thisItem);
      } else {
        recentAppointments.push(thisItem);
      }
    }
  };
  useEffect(() => {
    const allAppointments = async () => {
      await getUserAppointments();
      setUpcomingUserAppointments(upcomingAppointments);
      setRecentUserAppointments(recentAppointments);
    };
    allAppointments();
    // eslint-disable-next-line
  }, []);
  const testDetails: AppointmentTemplateType = {
    heading: "Appointments",
    upcoming: "Upcoming Tests",
    recent: "Recent Tests",
    upcoming_items: upcomingAppointments,
    recent_items: recentAppointments,
  };

  return (
    <MDiv>
      <StackContainer>
        <HeadingText variant="h1" data-testid="heading-app">
          {testDetails.heading}
        </HeadingText>
        <StackItem>
          <SubTitle variant="subtitle1" data-testid="upcoming-app">
            {testDetails.upcoming}
          </SubTitle>
          {upcomingUserAppointments?.map(
            (eachItem: itemsType, index: number) => (
              <TestDetail key={index} {...eachItem}></TestDetail>
            )
          )}
          {upcomingUserAppointments?.length === 0 && (
            <Typography variant="h6" color="secondary.dark">
              NO UPCOMING TESTS
            </Typography>
          )}
        </StackItem>
        <StackItem>
          <SubTitle variant="subtitle1" data-testid="recent-app">
            {testDetails.recent}
          </SubTitle>
          {recentUserAppointments?.map((eachItem: itemsType, index: number) => (
            <TestDetail key={index} {...eachItem}></TestDetail>
          ))}
          {recentUserAppointments?.length === 0 && (
            <Typography variant="h6" color="secondary.dark">
              NO TEST BOOKED
            </Typography>
          )}
        </StackItem>
      </StackContainer>
    </MDiv>
  );
};

export default MyAppointment;
