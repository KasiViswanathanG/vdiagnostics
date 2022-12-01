import React from "react";
import { Container } from "@mui/material";
import Header from "../../organisms/Header/index";

type TemplateProps = {
  location: string;
  content?: React.ReactNode | React.ReactNode[];
};

function ReportAppointment({ location, content }: TemplateProps) {
  return (
    <React.Fragment>
      <Container>
        <Header location={location} />
        {content}
      </Container>
    </React.Fragment>
  );
}

export default ReportAppointment;
