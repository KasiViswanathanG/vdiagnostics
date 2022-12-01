/* istanbul ignore file */
import React from "react";
import { Stack, Typography, Input } from "@mui/material";
import { styled } from "@mui/system";
import theme from "../../theme";

import {
  addressAdd,
  addressCity,
  addressHouseno,
  addressRoad,
  addressZipcode,
} from "../../../assets/constants";

const CardItem = styled(Stack)({
  flexDirection: "column",
  alignItems: "center",
  padding: "1.5em 1.5em 2.3em 1.5em",
  gap: "0.625em",
  backgroundColor: `${theme.palette.background.default}`,
  maxWidth: "36.4375em",
  filter: "drop-shadow(0px 0px 26px rgba(233, 232, 237, 0.5))",
});

const CardForm = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "2em",
  width: "33.4375em",
});

const HeadingText = styled(Typography)({
  letterSpacing: "-0.005em",
  color: "#5A5766",
});

const CardNumberText = styled(Typography)({
  color: `${theme.palette.text.disabled}`,
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

type AddAddressFormProp = {
  currentUserId?: any;
  handleCardNumberChange?: any;
  handleDateChange?: any;
  handleCvvChange?: any;
  handleNameChange?: any;
};

const AddressForm = ({
  handleCardNumberChange,
  handleCvvChange,
  handleDateChange,
  handleNameChange,
}: AddAddressFormProp) => {
  return (
    <CardItem>
      <CardForm>
        <HeadingText variant="subtitle1" data-testid="heading">
          {addressAdd}
        </HeadingText>
        <StackZ>
          <StackA>
            <CardNumberText variant="overline2" data-testid="nameText">
              {addressHouseno}
            </CardNumberText>
            <Input
              id="cardnum"
              onChange={handleCardNumberChange}
              type="text"
              inputProps={{ "data-testid": "cardnum" }}
              style={{ width: "535px", color: "#2D2A38" }}
              sx={{
                ":before": { borderBottomColor: "#E9E8ED" },

                ":after": { borderBottomColor: "#E9E8ED" },
              }}
            />
          </StackA>
          <StackA>
            <CardNumberText variant="overline2" data-testid="expiryText">
              {addressRoad}
            </CardNumberText>
            <Input
              id="expirynum"
              onChange={handleDateChange}
              type="text"
              style={{ width: "535px", color: "#2D2A38" }}
              inputProps={{ "data-testid": "expiry" }}
              sx={{
                ":before": { borderBottomColor: "#E9E8ED" },

                ":after": { borderBottomColor: "#E9E8ED" },
              }}
            />
          </StackA>
          <StackA>
            <CardNumberText variant="overline2" data-testid="cvvText">
              {addressZipcode}
            </CardNumberText>
            <Input
              id="cvvnum"
              onChange={handleCvvChange}
              type="text"
              style={{ width: "535px", color: "#2D2A38" }}
              inputProps={{ "data-testid": "cvvcard" }}
              sx={{
                ":before": { borderBottomColor: "#E9E8ED" },

                ":after": { borderBottomColor: "#E9E8ED" },
              }}
            />
          </StackA>
          <StackA>
            <CardNumberText variant="overline2" data-testid="holderText">
              {addressCity}
            </CardNumberText>
            <Input
              id="holder"
              onChange={handleNameChange}
              type="text"
              style={{ width: "535px", color: "#2D2A38" }}
              inputProps={{ "data-testid": "cardname" }}
              sx={{
                ":before": { borderBottomColor: "#E9E8ED" },

                ":after": { borderBottomColor: "#E9E8ED" },
              }}
            />
          </StackA>
        </StackZ>
      </CardForm>
    </CardItem>
  );
};

export default AddressForm;
