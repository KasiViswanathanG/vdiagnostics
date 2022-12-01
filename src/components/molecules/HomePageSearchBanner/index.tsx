import { styled } from "@mui/material";
import React from "react";
import MainPageBanner from "../../molecules/MainPageBanner";
import theme from "../../theme";

const MW86Div = styled("div")({
  marginTop: "2.5em",
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

const MT2 = styled("div")({
  marginTop: "2em",
});

const PDiv = styled("div")({
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

function HomePageSearchBanner() {
  return (
    <MW86Div>
      <PDiv>
        <MT2>
          <MainPageBanner data-test-id="banner" />
        </MT2>
      </PDiv>
    </MW86Div>
  );
}

export default HomePageSearchBanner;
