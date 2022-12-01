import { Typography, Grid, styled } from "@mui/material";
import React, { useState } from "react";
import {
  time6To12,
  timeRange6To12,
  time12To4,
  timeRange12To4,
  time4To6,
  timeRange4To6,
  timeWithAmPm,
} from "../../../assets/constants";
import { timeCoversion } from "../../../assets/constants/util";
import ButtonComponent from "../../atoms/Button";
import { FlexDiv, MT40Div } from "../../organisms/SelectAppointmentForm";
import { COLORS } from "../../theme/Colors";
import { palette } from "../../theme/Palette";

export const ML16W260Div = styled("div")({
  marginLeft: "1em",
  width: "18.6em",
});

export const SelectedTimeButton = styled(ButtonComponent)({
  height: "2.5em",
  width: "8em",
  padding: "0.5em",
  gap: "0.25em",
  backgroundColor: palette.secondary.dark,
  borderRadius: "0.75em",
  ":hover": {
    backgroundColor: palette.secondary.dark,
  },
});

export const TimeButton = styled(ButtonComponent)({
  height: "2.5em",
  width: "8em",
  padding: "0.5em",
  gap: "0.25em",
  backgroundColor: COLORS.GAMMA_GREY_50,
  borderRadius: "0.75em",
});

interface TimeProps {
  time: string;
  i: number;
}

export type TimeSelectionProps = {
  // eslint-disable-next-line no-unused-vars
  setTime: (time: string) => void;
  chosenTime: string;
};

const TimeSelection = ({ setTime, chosenTime }: TimeSelectionProps) => {
  const timeChosen = timeCoversion(chosenTime);
  const [selectedTime, setSelectedTime] = useState<string>(timeChosen);

  const changeTimeFormat = (time: string) => {
    let fullTime = "";
    for (let i = 0; i < 12; i++) {
      if (timeWithAmPm[i].substring(0, 2) === time.substring(0, 2)) {
        fullTime = timeWithAmPm[i];
      }
    }
    return fullTime;
  };

  const ChosenTime = ({ time, i }: TimeProps) => (
    <Grid key={i} item={true} xs={6}>
      <SelectedTimeButton data-testid={time}>
        <Typography variant="overline2" color="secondary.contrastText">
          {time}
        </Typography>
      </SelectedTimeButton>
    </Grid>
  );

  const handleClick = (time: string) => {
    setSelectedTime(time);
    const fullTime = changeTimeFormat(time);
    setTime(fullTime);
  };

  const Time = ({ time, i }: TimeProps) => (
    <Grid key={i} item={true} xs={6}>
      <TimeButton
        data-testid={time}
        onClick={() => {
          handleClick(time);
        }}
      >
        <Typography variant="overline2" color="text.disabled">
          {time}
        </Typography>
      </TimeButton>
    </Grid>
  );

  const TimeConditions = ({ time, i }: TimeProps) => {
    if (selectedTime === time) {
      return ChosenTime({ time, i });
    } else {
      return Time({ time, i });
    }
  };

  return (
    <>
      <FlexDiv>
        <div>
          <Typography variant="caption" color="text.primary">
            {time6To12}
          </Typography>
        </div>
        <ML16W260Div>
          <Grid container spacing={3}>
            {timeRange6To12.map((time, i) => TimeConditions({ time, i }))}
          </Grid>
        </ML16W260Div>
      </FlexDiv>

      <MT40Div>
        <FlexDiv>
          <div>
            <Typography variant="caption" color="text.primary">
              {time12To4}
            </Typography>
          </div>
          <ML16W260Div>
            <Grid container spacing={3}>
              {timeRange12To4.map((time, i) => TimeConditions({ time, i }))}
            </Grid>
          </ML16W260Div>
        </FlexDiv>
      </MT40Div>

      <MT40Div>
        <FlexDiv>
          <div>
            <Typography variant="caption" color="text.primary">
              {time4To6}
            </Typography>
          </div>
          <ML16W260Div>
            <Grid container spacing={3}>
              {timeRange4To6.map((time, i) => TimeConditions({ time, i }))}
            </Grid>
          </ML16W260Div>
        </FlexDiv>
      </MT40Div>
    </>
  );
};

export default TimeSelection;
