import { Grid, styled, Typography } from "@mui/material";
import React from "react";
import {
  Abby,
  CustomerTestimonials,
  review1,
  review2,
  SanJoseCA,
} from "../../../assets/constants";
import ReviewCard from "../../molecules/ReviewCard";
import { COLORS } from "../../theme/Colors";
import avatar1 from "../../../assets/avatar1.png";
import avatar2 from "../../../assets/avatar2.png";
import avatar3 from "../../../assets/avatar3.png";

const MPBGDiv = styled("div")({
  backgroundColor: COLORS.ALPHA_BLUE_800,
  width: "100%",
  marginTop: "5em",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const FlexSBMT32Div = styled("div")({
  marginTop: "2em",
  display: "flex",
  justifyContent: "space-between",
});

const PDiv = styled("div")({
  maxWidth: "1186px",
  padding: "3.75em 0em",
});

const HomePageTestimonials = () => {
  return (
    <MPBGDiv>
      <PDiv>
        <Typography variant="heading1" color="white">
          {CustomerTestimonials}
        </Typography>
        <FlexSBMT32Div>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={7} sm={7} md={5} lg={4} xl={4}>
              <ReviewCard
                data-testid="reviewCard1"
                avatar={avatar1}
                name={Abby}
                address={SanJoseCA}
                review={review1}
              />
            </Grid>
            <Grid item xs={7} sm={7} md={5} lg={4} xl={4}>
              <ReviewCard
                data-testid="reviewCard2"
                avatar={avatar2}
                name={Abby}
                address={SanJoseCA}
                review={
                  "“Very friendly and professional. Loved the follow-up and progress calls. I would like to suggest Zemoso diagnostics to my friends and family.”"
                }
              />
            </Grid>
            <Grid item xs={7} sm={7} md={5} lg={4} xl={4}>
              <ReviewCard
                data-testid="reviewCard3"
                avatar={avatar3}
                name={Abby}
                address={SanJoseCA}
                review={review2}
              />
            </Grid>
          </Grid>
        </FlexSBMT32Div>
      </PDiv>
    </MPBGDiv>
  );
};

export default HomePageTestimonials;
