/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography, Stack } from "@mui/material";
import altos from "../../../assets/image 7.png";
import star from "../../../assets/Shape.png";
import calender from "../../../assets/calendar.png";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/system";
import theme from "../../theme";
import { ReactComponent as select } from "../../../assets/icons/selected.svg";
import Icon from "../../atoms/Icon";
import {
  labCardName,
  labstars,
  labslots,
  labtime,
  labprice,
} from "../../../assets/constants";
import { COLORS } from "../../theme/Colors/index";

type Lab = {
  labName: string;
  testPrice: string;
  totalTestPrice: string;
};

interface LabProps {
  // eslint-disable-next-line no-unused-vars
  setLab?: (l: Lab) => void;
}
const CardStyled1 = styled(Card)({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  maxWidth: "535px",
  minWidth: "fit-content",
  padding: "0.75em",
  gap: "0.125em",
  background: `${theme.palette.background.default}`,
  border: "1px solid",
  borderColor: `${COLORS.GREY_100}`,
  boxShadow: "0px 0px 12px rgba(233, 232, 237, 0.53)",
  borderRadius: "0.75em",
  [theme.breakpoints.down("sm")]: {
    padding: "0.5em",
  },
});

const CardStyled = styled(Card)({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  maxWidth: "535px",
  minWidth: "fit-content",
  padding: "0.75em",
  gap: "0.125em",
  background: `${theme.palette.background.default}`,
  border: "1px solid",
  borderColor: `${COLORS.BETA_PURPLE_800}`,
  boxShadow: "0px 0px 12px rgba(233, 232, 237, 0.53)",
  borderRadius: "0.75em",
  [theme.breakpoints.down("sm")]: {
    padding: "0.5em",
  },
});

const cardMediaStyle = {
  width: "31.11px",
  height: "21.11px",
  marginTop: "9.11px",
  marginLeft: "4.44px",
};
const cardMediaStyle1 = {
  width: "13px",
  height: "12px",
};
const cardMediaStyle2 = {
  width: "18.4px",
  height: "18.4px",
};

const cardContentStyle = {
  padding: "0em 0.75em",
};

const StackA = styled(Stack)({
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "0em 0.75em",
  gap: "1.875em",
});

const StackB = styled(Stack)({
  flexDirection: "column",
  gap: "14px",
});

const StackC = styled(Stack)({
  flexDirection: "row",
  alignItems: "start",
  justifyContent: "space-between",
  width: "450px",
});

const StackE = styled(Stack)({
  marginRight: "-1.875em",
});

const StackF = styled(Stack)({
  flexDirection: "row",
  gap: "0.65625em",
});

const StackG = styled(Stack)({
  alignItems: "center",
  flexDirection: "row",
  gap: "0.34375em",
});

const TestPrice = styled(Typography)({
  color: `${theme.palette.text.secondary}`,
});

const TestTimeCount = styled(Typography)({
  fontSize: "0.75em",
  color: `${theme.palette.text.disabled}`,
  lineHeight: "1.125em",
});
const TestTimeCount1 = styled(Typography)({
  color: `${COLORS.TEXT_HIGH}`,
  textTransform: "none",
});

const SlotsType = styled(Typography)({
  color: `${COLORS.SUCCESS}`,
  textTransform: "none",
  marginTop: "2px",
});
const Stars = styled(Typography)({
  color: `${COLORS.TEXT_MEDIUM}`,
  textTransform: "none",
  marginTop: "2px",
});

const LabInfoCard2 = ({ setLab }: LabProps) => {
  const [selects, setSelects] = useState<boolean>(false);
  const onHandleChange = () => {
    setSelects(!selects);
  };
  useEffect(() => {
    selects
      ? setLab &&
        setLab({
          labName: "Los Altos Center Lab",
          testPrice: "$1200",
          totalTestPrice: "for 1 Test",
        })
      : setLab &&
        setLab({
          labName: "",
          testPrice: "",
          totalTestPrice: "",
        });
    // eslint-disable-next-line
  }, [selects]);
  return (
    <>
      {selects && (
        <CardStyled onClick={onHandleChange}>
          <ButtonBase>
            <CardMedia
              data-testid="imageTest"
              component="img"
              style={cardMediaStyle}
              image={altos}
              alt="body-test-img"
            />
          </ButtonBase>
          <StackA>
            <CardContent style={cardContentStyle}>
              <StackB>
                <StackC>
                  <TestPrice data-testid="priceTest" variant="bodyMedium">
                    {labCardName}
                  </TestPrice>
                  <StackE>
                    <Icon component={select}></Icon>
                  </StackE>
                </StackC>
                <StackF>
                  <StackG>
                    <CardMedia
                      component="img"
                      style={cardMediaStyle1}
                      image={star}
                      alt="star-test-img"
                    />
                    <Stars variant="overline">{labstars}</Stars>
                  </StackG>
                  <StackG>
                    <CardMedia
                      component="img"
                      style={cardMediaStyle2}
                      image={calender}
                      alt="calender-test-img"
                    />
                    <SlotsType variant="overline">{labslots}</SlotsType>
                  </StackG>
                </StackF>
                <TestTimeCount data-testid="countTest10" variant="body2">
                  {labtime}
                </TestTimeCount>
                <TestTimeCount1 data-testid="countTest20" variant="overline">
                  {labprice}
                </TestTimeCount1>
              </StackB>
            </CardContent>
          </StackA>
        </CardStyled>
      )}

      {!selects && (
        <CardStyled1 onClick={onHandleChange}>
          <CardMedia
            data-testid="imageTest"
            component="img"
            style={cardMediaStyle}
            image={altos}
            alt="body-test-img"
          />
          <StackA>
            <CardContent style={cardContentStyle}>
              <StackB>
                <TestPrice data-testid="priceTest1" variant="bodyMedium">
                  {labCardName}
                </TestPrice>
                <StackF>
                  <StackG>
                    <CardMedia
                      component="img"
                      style={cardMediaStyle1}
                      image={star}
                      alt="star-test-img"
                    />
                    <Stars variant="overline">{labstars}</Stars>
                  </StackG>
                  <StackG>
                    <CardMedia
                      component="img"
                      style={cardMediaStyle2}
                      image={calender}
                      alt="calender-test-img"
                    />
                    <SlotsType variant="overline">{labslots}</SlotsType>
                  </StackG>
                </StackF>
                <TestTimeCount data-testid="countTest11" variant="body2">
                  {labtime}
                </TestTimeCount>
                <TestTimeCount1 data-testid="countTest21" variant="overline">
                  {labprice}
                </TestTimeCount1>
              </StackB>
            </CardContent>
          </StackA>
        </CardStyled1>
      )}
    </>
  );
};

export default LabInfoCard2;
