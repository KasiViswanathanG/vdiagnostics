import { Box, Typography, Paper } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import Button from "../../atoms/Button";
import Icon from "../../atoms/Icon";
import { COLORS } from "../../theme/Colors/index";
import Patientsinfo from "../../molecules/Patientsinfo";
import { Add, New } from "./constants";
import { ReactComponent as addicon } from "../../../assets/icons/add.svg";

type patientType = {
  relation: string;
  name: string;
  dob: string;
  gender: string;
  id: number;
};

interface Props {
  handleNewClick?: () => void;
  // eslint-disable-next-line no-unused-vars
  handleCheckBoxChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // eslint-disable-next-line no-unused-vars
  handleEditClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  // list: Array<PatientInfoProps>;
  list: Array<patientType>;
}

const Container = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  borderRadius: "8px",
  width: "583px",
  minWidth: "fit-content",
  background: `${COLORS.WHITE}`,
});

const ListContainer = styled(Box)({
  marginTop: "36px",
  width: "100%",
});

const HeaderBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  marginTop: "33px",
  borderBottom: `1px solid ${COLORS.GREY_100}`,
  paddingBottom: "29px",
});

const AddPatientText = styled(Typography)({
  color: `${COLORS.TEXT_MEDIUM}`,
  marginLeft: "24px",
});

const NewPatientText = styled(Typography)({
  color: `${COLORS.ALPHA_BLUE_500}`,
});

const NewPatientButton = styled(Button)({
  marginRight: "32px",
});

const getCurrentYear = () => {
  const current = new Date();
  return current.getFullYear();
};

const PatientList = ({
  handleNewClick,
  handleCheckBoxChange,
  handleEditClick,
  list,
}: Props) => {
  return (
    <Container data-testid="patientslist" elevation={1}>
      <HeaderBox>
        <AddPatientText variant="subtitle1">{Add}</AddPatientText>
        <NewPatientButton
          onClick={handleNewClick}
          data-testid="new-patient-click"
          startIcon={<Icon component={addicon} inheritViewBox={true}></Icon>}
        >
          <NewPatientText variant="bodyMedium">{New}</NewPatientText>
        </NewPatientButton>
      </HeaderBox>

      <ListContainer>
        {list.map((eachPatient: patientType, index: number) => {
          if (eachPatient.name.length >= 1) {
            const { relation, name, gender, dob } = eachPatient;

            const newRelation =
              (relation && relation[0].toUpperCase() + relation.slice(1)) || "";
            const newGender =
              (gender && gender[0].toUpperCase() + gender.slice(1)) || "";

            const age = (
              getCurrentYear() - parseInt(dob.substring(0, 4))
            ).toString();

            const yearText = parseInt(age) > 1 ? "years" : "year";

            const patientInfoName = name;
            const patientInfoDetails = `${newRelation}, ${newGender}, ${age} ${yearText}`;

            return (
              <Box
                key={index}
                marginBottom={"42px"}
                marginLeft="26.5px"
                marginRight="35px"
              >
                <Patientsinfo
                  patientInfoDetails={patientInfoDetails}
                  patientInfoName={patientInfoName}
                  handleChange={handleCheckBoxChange}
                  handleEditClick={handleEditClick}
                  patientId={eachPatient.id}
                ></Patientsinfo>
              </Box>
            );
          } else {
            return <Box key={index}></Box>;
          }
        })}
      </ListContainer>
    </Container>
  );
};

export default PatientList;
