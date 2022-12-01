import React from "react";
import { Stack, Typography, Link, Box } from "@mui/material";
import Image from "../../atoms/Image/index";
import { footerLogo, footerItems } from "../../../assets/constants";
import Icon from "../../atoms/Icon";
import { ReactComponent as facebook } from "../../../assets/icons/facebook.svg";
import { ReactComponent as twitter } from "../../../assets/icons/twitter.svg";
import zemosoLogo from "../../../assets/vdlogo.png";
import googlePlay from "../../../assets/google_play.png";
import appStore from "../../../assets/app_store.png";
import { styled } from "@mui/system";
import theme from "../../theme";

const BoxA = styled(Box)({
  backgroundColor: `${theme.palette.primary.dark}`,
  [theme.breakpoints.down("sm")]: {
    padding: "1em",
  },
  padding: "3.75em 0em",
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

const StackA = styled(Stack)({
  flexDirection: "row",
  gap: "1.5em",
  justifyContent: "space-between",
  alignItems: "center",
});

const StackB = styled(Stack)({
  flexDirection: "column",
  gap: "1.5em",
});

const StackC = styled(Stack)({
  flexDirection: "row",
  gap: "0.25em",
  justifyContent: "space-between",
  alignItems: "center",
});

const FooterLogoText = styled(Typography)({
  fontSize: "0.75em",
  lineHeight: "1em",
  color: `${theme.palette.background.default}`,
});

const FooterItemText = styled(Typography)({
  fontSize: "0.75em",
  color: `${theme.palette.primary.light}`,
  lineHeight: "1.125em",
  "&:hover": { color: `${theme.palette.background.default}` },
});

const StackD = styled(Stack)({
  flexDirection: "column",
  gap: "0.5em",
});

const StackE = styled(Stack)({
  flexDirection: "column",
  gap: "1em",
});

const StackF = styled(Stack)({
  flexDirection: "row",
  gap: "1em",
  justifyContent: "flex-end",
});

const CDiv = styled("div")({
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

const MainPageFooter = () => {
  return (
    <BoxA>
      <CDiv>
        <StackA>
          <StackB>
            <StackC>
              <img
                src={zemosoLogo}
                alt="logo"
                style={{ height: "2em", width: "2em" }}
              />
              <FooterLogoText variant="subtitle1" data-testid="footerLogoTest">
                {footerLogo}
              </FooterLogoText>
            </StackC>
            <StackD>
              {footerItems.map((eachItem: string, index: number) => (
                <Link key={index} href="#" underline="none">
                  <FooterItemText variant="body1">{eachItem}</FooterItemText>
                </Link>
              ))}
            </StackD>
          </StackB>

          <StackE>
            <Link href="#">
              <Image src={googlePlay} />
            </Link>
            <Link href="#">
              <Image src={appStore} />
            </Link>
            <StackF>
              <Link href="#">
                <Icon component={facebook}></Icon>
              </Link>
              <Link href="#">
                <Icon component={twitter}></Icon>
              </Link>
            </StackF>
          </StackE>
        </StackA>
      </CDiv>
    </BoxA>
  );
};

export default MainPageFooter;
