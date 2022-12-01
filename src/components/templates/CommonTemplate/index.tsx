import React from "react";
import { Container, Box } from "@mui/material";
import { ImageType } from "../../atoms/Image/index";
import logo from "../../../assets/logoname.png";

type TemplateProps = {
  Component: React.ComponentType<ImageType>;
  content?: React.ReactNode | React.ReactNode[];
};

function CommonTemplate({ content, Component }: TemplateProps) {
  return (
    <React.Fragment>
      <Container>
        <Box data-testid="box" display="flex">
          <Component src={logo} />
        </Box>
        {content}
      </Container>
    </React.Fragment>
  );
}

export default CommonTemplate;
