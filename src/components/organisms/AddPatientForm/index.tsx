import React from "react";
import {
  Stack,
  Typography,
  FormControlLabel,
  Tab,
  Tabs,
  RadioGroup,
  Checkbox,
  Input,
} from "@mui/material";
import { styled } from "@mui/system";
import theme from "../../theme";
import RadioButton from "../../atoms/RadioButton";
import {
  formHeading,
  fieldRelation,
  fieldName,
  fieldDOB,
  fieldGender,
  relationLabels,
  genderLabels,
  detailsSave,
} from "../../../assets/constants";
import { getCurrentDate } from "../../../assets/constants/util";

//Form Container
const FormCard = styled(Stack)({
  flexDirection: "column",
  alignItems: "center",
  padding: "1.5em",
  borderRadius: "0.5em",
  gap: "0.625em",
  backgroundColor: `${theme.palette.background.default}`,
  maxWidth: "36.4375em",
  minWidth: "fit-content",
  filter: "drop-shadow(0px 0px 26px rgba(233, 232, 237, 0.5))",
  [theme.breakpoints.down("sm")]: {
    padding: "0.3em",
  },
});

//Form
const PatientForm = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "0.9375em",
  maxWidth: "33.4375em",
  minWidth: "fit-content",
});

//Heading
const HeadingText = styled(Typography)({
  letterSpacing: "-0.005em",
  color: `${theme.palette.text.secondary}`,
});

//Form Label Typography for Relation, Name, Date of Birth
const LabelTextA = styled(Typography)({
  fontSize: "0.75em",
  lineHeight: "1.125em",
  color: `${theme.palette.text.disabled}`,
});

//Form Label Typography for Gender
const LabelTextB = styled(Typography)({
  color: `${theme.palette.text.secondary}`,
});

//Form Label Typography for Gender Items
const LabelTextC = styled(FormControlLabel)({
  "&.MuiFormControlLabel-root .MuiFormControlLabel-label": {
    fontSize: "0.875em",
    lineHeight: "1.125em",
    color: `${theme.palette.text.primary}`,
  },
});

//Form Label Typography for Checkbox Text
const LabelTextD = styled(FormControlLabel)({
  "&.MuiFormControlLabel-root .MuiFormControlLabel-label": {
    fontSize: "0.875em",
    lineHeight: "1.125em",
    color: `${theme.palette.text.secondary}`,
  },
});

const InputField = styled(Input)({
  fontSize: "0.875em",
  lineHeight: "1.125em",
  fontWeight: "400",
  color: `${theme.palette.text.primary}`,
  "&:before": { borderBottomColor: `${theme.palette.grey[100]}` },
  "&:after": { borderBottomColor: `${theme.palette.grey[100]}` },
});

const StackField = styled(Stack)({
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "0em",
  gap: "0.5em",
  width: "100%",
});

const TabsField = styled(Tabs)({
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between",
  "&.MuiTabs-root .MuiTabs-scroller .MuiTabs-flexContainer": {
    gap: "1em",
  },
  "&.MuiTabs-root .MuiTabs-scroller .MuiTabs-indicator": {
    display: "none",
  },
});

const TabItem = styled(Tab)({
  height: "2em",
  padding: "0.375em 0.75em",
  fontSize: "0.875em",
  fontWeight: "500",
  textTransform: "none",
  color: `${theme.palette.text.disabled}`,
  letterSpacing: "0",
  lineHeight: "0",
  minWidth: "fit-content",
  minHeight: "0em",
  backgroundColor: `${theme.palette.grey[100]}`,
  borderRadius: "1em",

  "&.Mui-selected": {
    color: `${theme.palette.background.default}`,
    backgroundColor: `${theme.palette.secondary.dark}`,
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "0.6em",
  },
});

const checkBoxStyle = {
  color: `${theme.palette.secondary.dark}`,
  "&.MuiChecked": {
    color: `${theme.palette.secondary.dark}`,
  },
};

export type patientType = {
  relation: string;
  name: string;
  dob: string;
  gender: string;
  user_id: number;
  id: number;
};

export type PatientFormProp = {
  // eslint-disable-next-line no-unused-vars
  handleTabClick?: (_event: React.SyntheticEvent, newValue: string) => void;
  // eslint-disable-next-line no-unused-vars
  handleNamesChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // eslint-disable-next-line no-unused-vars
  handleDatesChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // eslint-disable-next-line no-unused-vars
  handleGenderChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckbox?: () => void;

  relation?: string;
  name?: string;
  dob?: string;
  gender?: string;
  saveDetails?: boolean;
};

const AddPatientForm = ({
  handleTabClick,
  handleNamesChange,
  handleDatesChange,
  handleGenderChange,
  handleCheckbox,
  relation,
  name,
  dob,
  gender,
  saveDetails,
}: PatientFormProp) => {
  const { myself, mother, father, son, daughter, others } = relationLabels;
  const { male, female, otherGender } = genderLabels;

  return (
    <FormCard>
      <PatientForm>
        <HeadingText variant="subtitle1" data-testid="formHeading">
          {formHeading}
        </HeadingText>
        <StackField>
          <LabelTextA variant="caption2" data-testid="relationText">
            {fieldRelation}
          </LabelTextA>

          <TabsField
            value={relation}
            onChange={(event: React.SyntheticEvent, value: string) => {
              event.preventDefault();
              handleTabClick && handleTabClick(event, value);
            }}
            data-testid="relation-tab"
          >
            <TabItem value="myself" label={myself} />
            <TabItem value="mother" label={mother} />
            <TabItem value="father" label={father} />
            <TabItem value="son" label={son} />
            <TabItem value="daughter" label={daughter} />
            <TabItem value="others" label={others} />
          </TabsField>
        </StackField>

        <StackField>
          <LabelTextA variant="caption2" data-testid="nameText">
            {fieldName}
          </LabelTextA>
          <InputField
            id="name"
            value={name}
            onChange={handleNamesChange}
            // variant="standard"
            type="text"
            fullWidth
            inputProps={{ "data-testid": "nameChange" }}
          />
        </StackField>

        <StackField>
          <LabelTextA variant="caption2" data-testid="DOBText">
            {fieldDOB}
          </LabelTextA>
          <InputField
            id="dob"
            // variant="standard"
            type="date"
            value={dob}
            onChange={handleDatesChange}
            fullWidth
            inputProps={{ max: getCurrentDate(), "data-testid": "DOBChange" }}
          />
        </StackField>

        <StackField>
          <LabelTextB variant="caption2" data-testid="genderText">
            {fieldGender}
          </LabelTextB>
          <RadioGroup
            row
            name="gender"
            onChange={handleGenderChange}
            value={gender}
          >
            <LabelTextC value="male" control={<RadioButton />} label={male} />
            <LabelTextC
              value="female"
              control={<RadioButton />}
              label={female}
            />
            <LabelTextC
              value="others"
              control={<RadioButton />}
              label={otherGender}
            />
          </RadioGroup>
        </StackField>

        <LabelTextD
          control={
            <Checkbox
              defaultChecked
              style={checkBoxStyle}
              value={saveDetails}
              onClick={handleCheckbox}
              data-testid="save-details-checkbox"
            />
          }
          label={detailsSave}
        />
      </PatientForm>
    </FormCard>
  );
};

export default AddPatientForm;
