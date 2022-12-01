import { styled } from "@mui/material";
import React from "react";
import MainPageFooter from "../MainPageFooter";

const MDiv = styled("div")({
  width: "100%",
  marginTop: "5em",
});

const HomePageFooter = () => {
  return (
    <MDiv>
      <MainPageFooter data-testid="footer" />
    </MDiv>
  );
};

export default HomePageFooter;
