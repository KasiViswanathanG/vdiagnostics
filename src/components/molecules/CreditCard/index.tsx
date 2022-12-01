import React from "react";
import { styled } from "@mui/material/styles";
import { Card, CardContent, Typography } from "@mui/material";
import Image from "../../atoms/Image";
import { cardHolderHeading, expiresHeading } from "../../../assets/constants";
import creditcardlogo from "../../../assets/credit_card.png";

const StyledCard = styled(Card)({
  height: "12.5em",
  borderRadius: "1em",
  boxShadow: "0em 0em 0.75em rgba(233, 232, 237, 0.7)",
});

const PaddingFlexDivStyle = styled("div")({
  padding: "0.9375em",
  display: "flex",
  justifyContent: "space-between",
});

const PaddingMTDivStyle = styled("div")({
  padding: "0.9375em",
  marginTop: "0.3125em",
});

const FlexMTDivStyle = styled("div")({
  display: "flex",
  marginTop: "1em",
});

const FlexColumnDivStyle = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const MarginLeftDivStyle = styled("div")({
  marginLeft: "2.5em",
});

interface CreditCardProps {
  sample: string;
  cardNumber: string;
  cardHolder: string;
  expires: string;
}

const CreditCard = ({
  sample,
  cardNumber,
  cardHolder,
  expires,
}: CreditCardProps) => {
  return (
    <StyledCard>
      <CardContent>
        <PaddingFlexDivStyle>
          <Image src={creditcardlogo} />
          <Typography
            variant="bodyRegular"
            color="Label_Black.30%"
            data-testid="sample"
          >
            {sample}
          </Typography>
        </PaddingFlexDivStyle>
        <PaddingMTDivStyle>
          <Typography
            variant="bodyMedium"
            color="text.primary"
            data-testid="cardNumber"
          >
            {cardNumber}
          </Typography>
          <FlexMTDivStyle>
            <FlexColumnDivStyle>
              <Typography
                variant="overlineRegular"
                color="text.disabled"
                data-testid="cardHolderHeading"
                gutterBottom
              >
                {cardHolderHeading}
              </Typography>
              <Typography
                variant="overline2"
                color="text.secondary"
                data-testid="cardHolder"
              >
                {cardHolder}
              </Typography>
            </FlexColumnDivStyle>
            <MarginLeftDivStyle>
              <FlexColumnDivStyle>
                <Typography
                  variant="overlineRegular"
                  color="text.disabled"
                  data-testid="expiresHeading"
                  gutterBottom
                >
                  {expiresHeading}
                </Typography>
                <Typography
                  variant="overline2"
                  color="text.secondary"
                  data-testid="expires"
                >
                  {expires}
                </Typography>
              </FlexColumnDivStyle>
            </MarginLeftDivStyle>
          </FlexMTDivStyle>
        </PaddingMTDivStyle>
      </CardContent>
    </StyledCard>
  );
};

export default CreditCard;
