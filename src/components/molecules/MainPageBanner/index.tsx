import React from "react";
import { Stack, Typography } from "@mui/material";
import Image from "../../atoms/Image/index";
import { bannerHeading, bannerCaption } from "../../../assets/constants";
import familyImg from "../../../assets/family.png";
import { styled } from "@mui/system";
import theme from "../../theme";

const StackA = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2.5em 3em",
  borderRadius: "0.75em",
  minWidth: "fit-content",
  backgroundColor: `${theme.palette.primary.dark}`,
  [theme.breakpoints.down("sm")]: {
    padding: "0.5em",
  },
});

const StackB = styled(Stack)({
  flexDirection: "column",
  gap: "2.625em",
  [theme.breakpoints.down("sm")]: {
    gap: "1em",
  },
});

const StackC = styled(Stack)({
  flexDirection: "column",
  gap: "0.25em",
});

const BannerHeading = styled(Typography)({
  color: `${theme.palette.background.default}`,
  letterSpacing: "-0.015em",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1em",
    lineHeight: "1",
  },
});

const BannerCaption = styled(Typography)({
  color: `${theme.palette.background.default}`,
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.65em",
  },
});

const MainPageBanner = () => {
  return (
    <StackA>
      <StackB>
        <StackC>
          <BannerHeading variant="heading1" data-testid="bannerHeadingTest">
            {bannerHeading}
          </BannerHeading>
          <BannerCaption variant="caption2" data-testid="bannerCaptionTest">
            {bannerCaption}
          </BannerCaption>
        </StackC>
      </StackB>

      <Stack>
        <Image src={familyImg} />
      </Stack>
    </StackA>
  );
};

export default MainPageBanner;
