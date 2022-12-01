import { Grid, IconButton, Paper, Typography, styled } from "@mui/material";
import React, { useState, useEffect } from "react";
import ButtonComponent from "../../atoms/Button";
import Icon from "../../atoms/Icon";
import { ReactComponent as RightArrow } from "../../../assets/icons/chevron-right.svg";
import { palette } from "../../theme/Palette";
import { COLORS } from "../../theme/Colors";
import _ from "lodash";
import { months, noOfDays, selectAppointment } from "../../../assets/constants";
import TimeSelection from "../../molecules/TimeSelection";
import { daysOfDateFunc, weekDaysFunc } from "../../../assets/constants/util";

const StyledPaper = styled(Paper)({
  width: "36.4375em",
  padding: "1.5em",
  borderRadius: "0.5em",
  boxShadow: "0em 0em 0.75em rgba(233, 232, 237, 0.53)",
  marginBottom: "5em",
});

export const MT48Div = styled("div")({
  marginTop: "3em",
});

export const MT40Div = styled("div")({
  marginTop: "2.5em",
});

export const FlexDiv = styled("div")({
  display: "flex",
});

export const FlexColumnDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
});

export const MR22Grid = styled(Grid)({
  marginRight: "1.375em",
});

export const MR16Grid = styled(Grid)({
  marginRight: "1em",
});

export const MLN97IconButton = styled(IconButton)({
  marginLeft: "-1.95em",
});

export const SelectedMonthButton = styled(ButtonComponent)({
  height: "2.5em",
  width: "8.875em",
  padding: "0.5em",
  gap: "0.25em",
  backgroundColor: palette.secondary.dark,
  borderRadius: "0.75em",
  ":hover": {
    backgroundColor: palette.secondary.dark,
  },
});

export const MonthButton = styled(ButtonComponent)({
  height: "2.5em",
  width: "8.875em",
  padding: "0.5em",
  gap: "0.25em",
  backgroundColor: COLORS.GAMMA_GREY_50,
  borderRadius: "0.75em",
});

export const SelectedDayButton = styled(ButtonComponent)({
  height: "4.75em",
  width: "4.0625em",
  padding: "1em 0.75em 1em 0.75em",
  gap: "0.25em",
  backgroundColor: palette.secondary.dark,
  borderRadius: "0.75em",
  ":hover": {
    backgroundColor: palette.secondary.dark,
  },
});

export const DayButton = styled(ButtonComponent)({
  height: "4.75em",
  width: "4.0625em",
  padding: "1em 0.75em 1em 0.75em",
  gap: "0.25em",
  backgroundColor: COLORS.GAMMA_GREY_50,
  borderRadius: "0.75em",
});

export type DateTimeType = {
  month: string;
  date: number;
  day: string;
  time: string;
};

export type DateTimeProps = {
  // eslint-disable-next-line no-unused-vars
  setDateTime?: (dateTime: DateTimeType) => void;
  month: string;
  date: number;
  day: string;
  time: string;
};

const SelectAppointmentForm = ({
  setDateTime,
  month,
  date,
  day,
  time,
}: DateTimeProps) => {
  const [isLastMonth, setIsLastMonth] = useState<boolean>(false);
  const [isLastDay, setIsLastDay] = useState<boolean>(false);
  const [monthStartNo, setMonthStartNo] = useState<number>(0);
  const [dayStartNo, setDayStartNo] = useState<number>(1);
  const [dayAdder, setdayAdder] = useState<number>(0);
  const [selectedMonth, setSelectedMonth] = useState<string>(month);
  const [selectedDay, setSelectedDay] = useState<number>(date);
  const [selectedWeekDay, setSelectedWeekDay] = useState<string>(day);
  const [selectedTime, setSelectedTime] = useState<string>(time);
  const monthNo = months.indexOf(selectedMonth);
  const daysOfMonth = noOfDays[monthNo];
  const daysOfDate = daysOfDateFunc();
  const weekDays = weekDaysFunc();

  const changeMonth = () => {
    setdayAdder(() => {
      let finalVal = 0;
      const stopIndex = months.indexOf(selectedMonth);
      for (let i = 0; i < stopIndex; i++) {
        finalVal += noOfDays[i];
      }
      return finalVal;
    });
  };

  useEffect(() => {
    changeMonth();
    if (isLastMonth) {
      setMonthStartNo(0);
      setIsLastMonth(false);
    }
    if (isLastDay) {
      setDayStartNo(1);
      setIsLastDay(false);
    }
    setSelectedWeekDay(weekDays[selectedDay + dayAdder]);
    setDateTime &&
      setDateTime({
        month: selectedMonth,
        date: selectedDay,
        day: selectedWeekDay,
        time: selectedTime,
      });
    // eslint-disable-next-line
  }, [
    isLastMonth,
    isLastDay,
    selectedMonth,
    selectedDay,
    monthStartNo,
    dayStartNo,
    dayAdder,
    selectedWeekDay,
    selectedTime,
  ]);

  return (
    <StyledPaper>
      <div>
        <Typography variant="subtitle1" color="text.primary">
          {selectAppointment}
        </Typography>
      </div>
      <MT48Div>
        <FlexDiv>
          <Grid container>
            {_.times(3, (i) => {
              const month = months[i + monthStartNo];
              if (month === selectedMonth) {
                return (
                  <MR22Grid key={i}>
                    <SelectedMonthButton data-testid={month}>
                      <Typography
                        variant="overline2"
                        color="secondary.contrastText"
                      >
                        {month}
                      </Typography>
                    </SelectedMonthButton>
                  </MR22Grid>
                );
              } else {
                return (
                  <MR22Grid key={i}>
                    <MonthButton
                      data-testid={month}
                      onClick={() => {
                        setSelectedMonth(month);
                        setDayStartNo(1);
                        changeMonth();
                      }}
                    >
                      <Typography variant="overline2" color={"#5A5766"}>
                        {month}
                      </Typography>
                    </MonthButton>
                  </MR22Grid>
                );
              }
            })}
          </Grid>
          <MLN97IconButton
            data-testid="monthScroll"
            onClick={() => {
              setMonthStartNo(monthStartNo + 1);
              if (monthStartNo === 9) {
                setIsLastMonth(true);
              }
            }}
          >
            <Icon component={RightArrow}></Icon>
          </MLN97IconButton>
        </FlexDiv>

        <MT48Div>
          <FlexDiv>
            {_.times(6, (i) => {
              if (i + dayStartNo === selectedDay) {
                return (
                  <MR16Grid key={i}>
                    <SelectedDayButton data-testid={i + dayStartNo}>
                      <FlexColumnDiv>
                        <Typography
                          variant="captionRegular"
                          color="secondary.contrastText"
                          gutterBottom
                        >
                          {daysOfDate[i + dayStartNo + dayAdder]}
                        </Typography>
                        <Typography
                          variant="bodyMedium"
                          color="secondary.contrastText"
                        >
                          {i + dayStartNo}
                        </Typography>
                      </FlexColumnDiv>
                    </SelectedDayButton>
                  </MR16Grid>
                );
              } else {
                return (
                  <MR16Grid key={i}>
                    <DayButton
                      data-testid={i + dayStartNo}
                      onClick={() => {
                        setSelectedDay(i + dayStartNo);
                      }}
                    >
                      <FlexColumnDiv>
                        <Typography
                          variant="captionRegular"
                          color="text.disabled"
                          gutterBottom
                        >
                          {daysOfDate[i + dayStartNo + dayAdder]}
                        </Typography>
                        <Typography variant="bodyMedium" color="text.secondary">
                          {i + dayStartNo}
                        </Typography>
                      </FlexColumnDiv>
                    </DayButton>
                  </MR16Grid>
                );
              }
            })}
            <IconButton
              data-testid="dayScroll"
              onClick={() => {
                setDayStartNo(dayStartNo + 1);
                if (dayStartNo + 5 === daysOfMonth) {
                  setIsLastDay(true);
                }
              }}
            >
              <Icon component={RightArrow}></Icon>
            </IconButton>
          </FlexDiv>
        </MT48Div>
      </MT48Div>
      <MT48Div>
        <TimeSelection chosenTime={selectedTime} setTime={setSelectedTime} />
      </MT48Div>
    </StyledPaper>
  );
};

export default SelectAppointmentForm;
