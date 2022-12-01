import React from "react";
import "@mui/material";

declare module "@mui/material/styles" {
  // eslint-disable-next-line no-unused-vars
  interface TypographyVariants {
    title: React.CSSProperties | undefined;
    caption2: React.CSSProperties | undefined;
    caption3: React.CSSProperties | undefined;
    captionRegular: React.CSSProperties | undefined;
    captionSemibold: React.CSSProperties | undefined;
    overline2: React.CSSProperties | undefined;
    overline1: React.CSSProperties | undefined;
    overlineRegular: React.CSSProperties | undefined;
    bodyRegular: React.CSSProperties | undefined;
    bodyMedium: React.CSSProperties | undefined;
    bodyMedium2: React.CSSProperties | undefined;
    heading1: React.CSSProperties | undefined;
    heading2: React.CSSProperties | undefined;
  }

  // eslint-disable-next-line no-unused-vars
  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
    caption2?: React.CSSProperties;
    caption3?: React.CSSProperties;
    captionRegular: React.CSSProperties;
    captionSemibold: React.CSSProperties;
    overline2?: React.CSSProperties;
    overline1?: React.CSSProperties;
    overlineRegular: React.CSSProperties;
    bodyRegular: React.CSSProperties;
    bodyMedium: React.CSSProperties;
    bodyMedium2: React.CSSProperties;
    heading1: React.CSSProperties;
    heading2: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  // eslint-disable-next-line no-unused-vars
  interface TypographyPropsVariantOverrides {
    title: true;
    caption2: true;
    caption3: true;
    captionRegular: true;
    captionSemibold: true;
    overline1: true;
    overline2: true;
    regular: true;
    overlineRegular: true;
    bodyRegular: true;
    bodyMedium: true;
    medium: true;
    regularCaption: true;
    bodyMedium2: true;
    captionMedium: true;
    heading1: true;
    heading2: true;
  }
}

export const typography = {
  title: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "3em",
    lineHeight: "3.25px",
  },
  button: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "1.125em",
    lineHeight: "1.25em",
  },
  allVariants: {
    color: "#262626",
  },
  overline: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "0.875em",
    lineHeight: "1.25em",
  },
  overline2: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "0.75em",
    lineHeight: "1.125em",
  },
  overlineRegular: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "0.75em",
    lineHeight: "1.125em",
  },
  h1: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "1.5em",
    lineHeight: "1.75em",
  },
  h2: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "1.5em",
    lineHeight: "1.75em",
  },
  body1: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "1.125em",
    lineHeight: "1.5em",
  },
  body2: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "1.125em",
    lineHeight: "1.5em",
  },
  bodyRegular: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "1em",
    lineHeight: "1.25em",
  },
  bodyMedium: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "1em",
    lineHeight: "1.25em",
    Letter: "0.5%",
  },
  bodyMedium2: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "0.875em",
    lineHeight: "1.25em",
  },
  caption: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "0.875em",
    lineHeight: "1.25em",
  },
  regularCaption: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "0.875em",
    lineHeight: "1.125em",
  },
  captionMedium: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "0.875em",
    lineHeight: "1.25em",
  },
  caption2: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "0.875em",
    lineHeight: "1.25em",
  },
  captionRegular: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "0.875em",
    lineHeight: "1.25em",
  },
  captionSemibold: {
    fontFamily: "inter",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "16px",
  },
  subtitle1: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "1.25em",
    lineHeight: "1.5em",
  },
  subtitle2: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "1.25em",
    lineHeight: "1.5em",
  },
  heading1: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "1.5em",
    lineHeight: "1.75em",
  },
  heading2: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "1.5em",
    lineHeight: "1.75em",
  },
};
