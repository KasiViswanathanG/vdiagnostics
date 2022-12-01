import React, { useState } from "react";
import {
  Stack,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import theme from "../../theme";
import ButtonComponent from "../../atoms/Button";
import { COLORS } from "../../theme/Colors";
import {
  addCardHeading,
  addCardNumber,
  addCardNumberPlaceHolder,
  addCardExpiry,
  addCardExpiryPlaceHolder,
  addCardCvv,
  addCardCvvPlaceHolder,
  addCardHolder,
  addCardPlaceHolder,
  addCardLabel,
  addCardButton,
} from "../../../assets/constants";
import { postCard } from "../../../services";
import Icon from "../../atoms/Icon";
import { ReactComponent as crossIcon } from "../../../assets/icons/close.svg";

const CardItem = styled(Stack)({
  flexDirection: "column",
  alignItems: "center",
  padding: "3em 0em",
  gap: "0.625em",
  backgroundColor: `${theme.palette.background.default}`,
  width: "40.625em",
  filter: "drop-shadow(0px 0px 26px rgba(233, 232, 237, 0.5))",
});

const CardForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "1.5em",
  width: "33.4375em",
});

const HeadingText = styled(Typography)({
  letterSpacing: "-0.005em",
  color: `${theme.palette.text.primary}`,
});

const TypographyA = styled(Typography)({
  ":hover": {
    color: `${theme.palette.background.default}`,
  },
});

const CardNumberText = styled(Typography)({
  color: `${theme.palette.text.disabled}`,
});

const Button = styled(ButtonComponent)({
  borderRadius: "0.5em",
  width: "11.6875em",
  padding: "0.5em 1em",
  fontWeight: "600",
  color: `${theme.palette.background.paper}`,
  backgroundColor: `${theme.palette.primary.main}`,
  marginLeft: "9.375em",
  "&:hover": {
    backgroundColor: `${theme.palette.primary.dark}`,
  },
});

const CheckBoxText = styled(FormControlLabel)({
  "&.MuiFormControlLabel-root .MuiFormControlLabel-label": {
    fontSize: "0.875em",
    fontWeight: "400",
    lineHeight: "1.125em",
    color: `${theme.palette.text.secondary}`,
  },
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

const checkBoxStyle = {
  color: `${theme.palette.secondary.dark}`,
  "&.MuiChecked": {
    color: `${theme.palette.secondary.dark}`,
  },
};

const StackA = styled(Stack)({
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "0em",
  gap: "0.25em",
  width: "100%",
});

const StackC = styled(Stack)({
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "0em",
  gap: "0.25em",
  width: "50%",
});

const StackB = styled(Stack)({
  flexDirection: "row",
  alignItems: "flex-start",
  padding: "0em",
  gap: "0.625em",
  width: "100%",
});

const StackZ = styled(Stack)({
  gap: "3em",
  width: "35em",
});

const HeaderStack = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

type AddCardFormType = {
  currentUserId?: any;
  // eslint-disable-next-line no-unused-vars
  setCardAdded?: (prevState: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  setCardNumber?: (cardNum: string) => void;
  // eslint-disable-next-line no-unused-vars
  setCardHolder?: (cardHolder: string) => void;
  // eslint-disable-next-line no-unused-vars
  setExpDate?: (cardExpiryDate: string) => void;
  handleCloseClick?: () => void;
};

const AddCardForm = ({
  setCardAdded,
  currentUserId,
  setCardNumber,
  setCardHolder,
  setExpDate,
  handleCloseClick,
}: AddCardFormType) => {
  const [cardNo, setNumber] = useState<string>("");
  const [expiryDate, setDate] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");
  const [holderName, setName] = useState<string>("");
  const [saveCard, setCheckBoxDetails] = useState<boolean>(true);
  const [currentUser] = useState<any>(currentUserId);

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setNumber(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleCvvChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCvv(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleCheckbox = () => {
    setCheckBoxDetails((prevState: boolean) => {
      return prevState ? false : true;
    });
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newCard = {
      cardNumber: cardNo,
      expiryDate: expiryDate,
      cvv: cvv,
      cardHolder: holderName,
      userId: currentUser,
    };

    saveCard && postCard(newCard);
    setCardNumber && setCardNumber(cardNo);
    setCardHolder && setCardHolder(holderName);
    setExpDate && setExpDate(expiryDate);
    setCardAdded && setCardAdded(true);
  };
  return (
    <CardItem>
      <CardForm onSubmit={handleOnSubmit}>
        <HeaderStack>
          <HeadingText variant="subtitle1" data-testid="heading">
            {addCardHeading}
          </HeadingText>
          <IconButton onClick={handleCloseClick} sx={{ marginLeft: "14em" }}>
            <Icon component={crossIcon} inheritViewBox={true} />
          </IconButton>
        </HeaderStack>
        <StackZ gap="3em">
          <StackA>
            <CardNumberText variant="overline2" data-testid="nameText">
              {addCardNumber}
            </CardNumberText>
            <FormTextField
              id="cardnum"
              placeholder={addCardNumberPlaceHolder}
              onChange={handleCardNumberChange}
              variant="standard"
              type="text"
              fullWidth
              inputProps={{ "data-testid": "cardnum" }}
            />
          </StackA>
          <StackB>
            <StackC>
              <CardNumberText variant="overline2" data-testid="expiryText">
                {addCardExpiry}
              </CardNumberText>
              <FormTextField
                id="expirynum"
                placeholder={addCardExpiryPlaceHolder}
                onChange={handleDateChange}
                variant="standard"
                type="date"
                fullWidth
                inputProps={{ "data-testid": "expiry" }}
              />
            </StackC>
            <StackC>
              <CardNumberText variant="overline2" data-testid="cvvText">
                {addCardCvv}
              </CardNumberText>
              <FormTextField
                id="cvvnum"
                placeholder={addCardCvvPlaceHolder}
                onChange={handleCvvChange}
                variant="standard"
                type="text"
                fullWidth
                inputProps={{ "data-testid": "cvvcard" }}
              />
            </StackC>
          </StackB>
          <StackA>
            <CardNumberText variant="overline2" data-testid="holderText">
              {addCardHolder}
            </CardNumberText>
            <FormTextField
              id="holder"
              placeholder={addCardPlaceHolder}
              onChange={handleNameChange}
              variant="standard"
              type="text"
              fullWidth
              inputProps={{ "data-testid": "cardname" }}
            />
          </StackA>
        </StackZ>
        <CheckBoxText
          control={
            <Checkbox
              defaultChecked
              style={checkBoxStyle}
              onClick={handleCheckbox}
              data-testid={`checkbox-1234`}
            />
          }
          label={addCardLabel}
        />
        <Button type="submit">
          <TypographyA data-testid="buttonType" color={COLORS.WHITE}>
            {addCardButton}
          </TypographyA>
        </Button>
      </CardForm>
    </CardItem>
  );
};

export default AddCardForm;
