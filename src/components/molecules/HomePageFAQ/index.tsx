import { Typography, styled } from "@mui/material";
import React from "react";
import {
  FAQ,
  faqContent1,
  faqContent2,
  faqContent3,
  faqContent4,
  faqLable1,
  faqLable2,
  faqLable3,
  faqLable4,
} from "../../../assets/constants";
import Faq from "../../molecules/Faq";
import theme from "../../theme";

const WDiv = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

const ML120W82Div = styled("div")({
  marginTop: "3em",
  [theme.breakpoints.up("xs")]: {
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "1186px",
  },
  [theme.breakpoints.up("xl")]: {
    width: "1186px",
  },
});

const MT32Div = styled("div")({ marginTop: "2em" });

const HomePageFAQ = () => {
  return (
    <WDiv>
      <ML120W82Div>
        <MT32Div>
          <Typography variant="heading1">{FAQ}</Typography>
        </MT32Div>
        <MT32Div>
          <Faq label={faqLable1} content={faqContent1} data-testid="faq1" />
          <Faq label={faqLable2} content={faqContent2} data-testid="faq2" />
          <Faq label={faqLable3} content={faqContent3} data-testid="faq3" />
          <Faq label={faqLable4} content={faqContent4} data-testid="faq4" />
        </MT32Div>
      </ML120W82Div>
    </WDiv>
  );
};

export default HomePageFAQ;
