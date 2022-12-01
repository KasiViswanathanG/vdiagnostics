import React, { useState } from "react";
import { Box, Typography, Modal } from "@mui/material";
import { Text, AddCard, Gpay, NetBanking, PayPal, Options } from "./constants";
import { COLORS } from "../../theme/Colors/index";
import Button from "../../atoms/Button/index";
import { ReactComponent as addicon } from "../../../assets/icons/add.svg";
import { ReactComponent as paypal } from "../../../assets/icons/PayPal.svg";
import { ReactComponent as gpay } from "../../../assets/icons/GooglePay.svg";
import { ReactComponent as netbanking } from "../../../assets/icons/Net Banking.svg";
import { styled } from "@mui/system";
import Icon from "../../atoms/Icon";
import RadioGroup from "@mui/material/RadioGroup";
import RadioButton from "../../atoms/RadioButton";
import AddCardForm from "../AddCardForm";
import CreditCard from "../../molecules/CreditCard";

interface Props {
  currentUserId?: any;
  carddetail?: React.ReactNode;
}
const CardDetailTypography = styled(Typography)({
  color: `${COLORS.TEXT_MEDIUM}`,
  marginLeft: "24px",
});

const OtherPaymentOptions = styled(Typography)({
  color: `${COLORS.TEXT_HIGH}`,
  marginBottom: "15px",
});

const PaymentOptions = styled(Typography)({
  color: `${COLORS.TEXT_HIGH}`,
  marginBottom: "7px",
  marginLeft: "14px",
});

const ContainerBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  boxShadow: "0px 0px 26px rgba(233, 232, 237, 0.5)",
  width: "482px",
  height: "fit-content",
  borderRadius: "8px",
  padding: "1.25em",
  gap: "2.5em",
});

const PaymentOptionsContainer = styled(RadioGroup)({
  display: "flex",
  flexDirection: "column",
  marginLeft: "24px",
});

const PaymentOptionsBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

const AddCardBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "33px",
});

const CustomisedButton = styled(Button)({
  minHeight: "42px",
  minWidth: "116px",
  padding: "11px 8px",
  color: `${COLORS.ALPHA_BLUE_500}`,
  marginRight: "24px",
});

const LineSeperator = styled(Box)({
  border: "1px solid",
  borderColor: `${COLORS.GREY_100}`,
  height: "0px",
  width: "460px",
});

const ModalPop = styled(Modal)({
  top: "15%",
  left: "30%",
});

const CardDetail = ({ carddetail, currentUserId }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [isCardAdded, setCardAdded] = useState<boolean>(false);

  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardHolder, setCardHolder] = useState<string>("");
  const [cardExpiryDate, setExpDate] = useState<string>("");

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseClick = () => {
    handleClose();
  };

  /*useEffect(() => {
    if (isCardAdded) {
      /*const cardData = getCards();
      const getCardDetails = async () => {
        const allCards = await cardData;
        const userCards = [];
        for (let i of allCards) {
          if (allCards[i].user_id === currentUserId) {
            userCards.push(allCards[i]);
          }
        }

        const { cardNo, expiryDate, holderName } =
          userCards[userCards.length - 1]; 

        setCardNumber(cardNo);
        setCardHolder(holderName);
        setExpDate(expiryDate);
      };
      getCardDetails();
    }
  }, [isCardAdded]);*/

  return (
    <ContainerBox data-testid="carddetail">
      <AddCardBox>
        <CardDetailTypography variant="subtitle1">{Text}</CardDetailTypography>
        <CustomisedButton
          onClick={handleOpen}
          startIcon={<Icon component={addicon} inheritViewBox={true}></Icon>}
        >
          <Typography variant="bodyMedium">{AddCard}</Typography>
        </CustomisedButton>
        <ModalPop
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <AddCardForm
              currentUserId={currentUserId}
              setCardAdded={setCardAdded}
              setCardNumber={setCardNumber}
              setCardHolder={setCardHolder}
              setExpDate={setExpDate}
              handleCloseClick={handleCloseClick}
            />
          </Box>
        </ModalPop>
      </AddCardBox>

      {!isCardAdded && <LineSeperator />}
      {isCardAdded && (
        <CreditCard
          sample="Sample"
          cardNumber={cardNumber}
          cardHolder={cardHolder}
          expires={cardExpiryDate}
        />
      )}

      {carddetail}
      <PaymentOptionsContainer defaultValue={"gpay"}>
        <OtherPaymentOptions variant="bodyMedium">
          {Options}
        </OtherPaymentOptions>
        <PaymentOptionsBox>
          <Box display="flex" alignItems="center">
            <Icon
              component={paypal}
              inheritViewBox={true}
              fontSize="large"
              sx={{ fill: "none" }}
            ></Icon>
            <PaymentOptions variant="regularCaption">{PayPal}</PaymentOptions>
          </Box>
          <RadioButton value="paypal"></RadioButton>
        </PaymentOptionsBox>
        <PaymentOptionsBox>
          <Box display="flex" alignItems="center">
            <Icon
              component={gpay}
              inheritViewBox={true}
              fontSize="large"
              sx={{ fill: "none" }}
            ></Icon>
            <PaymentOptions variant="regularCaption">{Gpay}</PaymentOptions>
          </Box>
          <RadioButton value="gpay"></RadioButton>
        </PaymentOptionsBox>
        <PaymentOptionsBox>
          <Box display="flex" alignItems="center">
            <Icon
              component={netbanking}
              inheritViewBox={true}
              fontSize="large"
              sx={{ fill: "none" }}
            ></Icon>
            <PaymentOptions variant="regularCaption">
              {NetBanking}
            </PaymentOptions>
          </Box>
          <RadioButton value="netbanking"></RadioButton>
        </PaymentOptionsBox>
      </PaymentOptionsContainer>
    </ContainerBox>
  );
};

export default CardDetail;
