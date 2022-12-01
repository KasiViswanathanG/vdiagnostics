/* istanbul ignore file */
import React, { useState } from "react";
import { Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import theme from "../../theme";
import Button from "../../atoms/Button";
import { postAddress } from "../../../services";
import {
  addressAdd,
  addressButtonText,
  addressCity,
  addressHouseno,
  addressRoad,
  addressZipcode,
} from "../../../assets/constants";

const CardItem = styled(Stack)({
  flexDirection: "column",
  alignItems: "center",
  padding: "1.5em",
  gap: "0.625em",
  backgroundColor: `${theme.palette.background.default}`,
  maxWidth: "36.4375em",
  filter: "drop-shadow(0px 0px 26px rgba(233, 232, 237, 0.5))",
});

const CardForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "2em",
  width: "33.4375em",
});

const HeadingText = styled(Typography)({
  letterSpacing: "-0.005em",
  color: `${theme.palette.text.primary}`,
});

const CardNumberText = styled(Typography)({
  color: `${theme.palette.text.disabled}`,
});

const FormTextField = styled(TextField)({
  "&.MuiFormControl-root ": {
    fontSize: "0.875em",
    lineHeight: "1.125em",
    fontWeight: "400",
    color: `${theme.palette.text.primary}`,
  },
  ".MuiInput-underline:before": {
    borderColor: `${theme.palette.grey[100]}`,
  },
});

const StackA = styled(Stack)({
  flexDirection: "column",
  alignItems: "flex-start",
  paddingRight: "0em",
  gap: "0.25em",
  width: "100%",
});

const StackZ = styled(Stack)({
  gap: "1.375em",
  width: "35em",
});

const AddButton = styled(Button)({
  width: "8em",
  height: "1.5em",
  padding: "1em 0.5em",
  borderRadius: "0.5rem",
  borderColor: `${theme.palette.primary.main}`,
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
  },
});

const AddButtonText = styled(Typography)({
  color: `${theme.palette.primary.main}`,
});

type AddAddressFormProp = {
  currentUserId?: any;
};

const AddAddressForm = ({ currentUserId }: AddAddressFormProp) => {
  const [houseno, setHouseno] = useState<string>("");
  const [road, setRoad] = useState<string>("");
  const [zipcode, setZipcode] = useState<string>("");
  const [city, setCity] = useState<string>("");

  const [currentUser] = useState<any>(currentUserId);

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setHouseno(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoad(event.target.value);
  };

  const handleCvvChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZipcode(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newAddress = {
      houseNum: houseno,
      area: road,
      zipcode: zipcode,
      cityState: city,
      userId: currentUser,
    };
    postAddress(newAddress);
  };
  return (
    <CardItem>
      <CardForm id="Cardform" onSubmit={handleOnSubmit}>
        <HeadingText variant="subtitle1" data-testid="heading">
          {addressAdd}
        </HeadingText>
        <StackZ>
          <StackA>
            <CardNumberText variant="overline2" data-testid="nameText">
              {addressHouseno}
            </CardNumberText>
            <FormTextField
              id="cardnum"
              onChange={handleCardNumberChange}
              variant="standard"
              type="text"
              inputProps={{ "data-testid": "cardnum" }}
              style={{ width: "38.4375em" }}
            />
          </StackA>
          <StackA>
            <CardNumberText variant="overline2" data-testid="expiryText">
              {addressRoad}
            </CardNumberText>
            <FormTextField
              id="expirynum"
              onChange={handleDateChange}
              variant="standard"
              type="text"
              style={{ width: "38.4375em" }}
              inputProps={{ "data-testid": "expiry" }}
            />
          </StackA>
          <StackA>
            <CardNumberText variant="overline2" data-testid="cvvText">
              {addressZipcode}
            </CardNumberText>
            <FormTextField
              id="cvvnum"
              onChange={handleCvvChange}
              variant="standard"
              type="text"
              style={{ width: "38.4375em" }}
              inputProps={{ "data-testid": "cvvcard" }}
            />
          </StackA>
          <StackA>
            <CardNumberText variant="overline2" data-testid="holderText">
              {addressCity}
            </CardNumberText>
            <FormTextField
              id="holder"
              onChange={handleNameChange}
              variant="standard"
              type="text"
              style={{ width: "38.4375em" }}
              inputProps={{ "data-testid": "cardname" }}
            />
          </StackA>
        </StackZ>
        <AddButton variant="outlined" type="submit" data-testid="add-btn">
          <AddButtonText variant="overline2" data-testid="add-btn-text">
            {addressButtonText}
          </AddButtonText>
        </AddButton>
      </CardForm>
    </CardItem>
  );
};

export default AddAddressForm;
