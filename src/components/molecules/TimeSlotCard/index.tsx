import { Typography } from "@mui/material";
import React from "react";
import ButtonComponent from "../../atoms/Button";
import Icon from "../../atoms/Icon";
import {
  FlexDiv,
  LineDiv,
  MTN3Div,
  PTL9Div,
  StyledCard4,
  StyledDiv,
} from "../../organisms/CheckoutDetail";
import { timeSlotSelected, change } from "../../../assets/constants";
import { ReactComponent as calendar } from "../../../assets/icons/calendar.svg";

interface TimeSlotCardProps {
  date: string;
  time: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const TimeSlotCard = ({ date, time, onClick }: TimeSlotCardProps) => {
  return (
    <StyledCard4>
      <div>
        <MTN3Div>
          <StyledDiv>
            <FlexDiv>
              <Icon fontSize="small" component={calendar}></Icon>
              <PTL9Div>
                <Typography
                  variant="overline2"
                  color="text.disabled"
                  data-testid="timeSlotSelected"
                >
                  {timeSlotSelected}
                </Typography>
              </PTL9Div>
            </FlexDiv>
            <MTN3Div>
              <MTN3Div>
                <ButtonComponent variant="text" onClick={onClick}>
                  <Typography
                    variant="overline2"
                    color="primary.main"
                    data-testid="change"
                  >
                    {change}
                  </Typography>
                </ButtonComponent>
              </MTN3Div>
            </MTN3Div>
          </StyledDiv>
        </MTN3Div>
        <FlexDiv>
          <Typography
            variant="overline2"
            color="text.primary"
            data-testid="date"
          >
            {date}
          </Typography>
          <LineDiv />
          <Typography
            variant="overline2"
            color="text.primary"
            data-testid="time"
          >
            {time}
          </Typography>
        </FlexDiv>
      </div>
    </StyledCard4>
  );
};

export default TimeSlotCard;
