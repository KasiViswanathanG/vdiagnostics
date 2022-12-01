import React from "react";
import { Typography } from "@mui/material";
import ButtonComponent from "../../atoms/Button";
import Icon from "../../atoms/Icon";
import {
  FlexDiv,
  MT2Div,
  MTN3Div,
  PL3Div,
  StyledCard4,
  StyledDiv,
} from "../../organisms/CheckoutDetail";
import {
  addressSelected,
  leftBraces,
  rightBraces,
  change,
} from "../../../assets/constants";
import { ReactComponent as home } from "../../../assets/icons/home-disabled.svg";

interface AddressCardProps {
  addressType: string;
  address: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const AddressCard = ({ addressType, address, onClick }: AddressCardProps) => {
  return (
    <StyledCard4>
      <div>
        <StyledDiv>
          <FlexDiv>
            <MT2Div>
              <Icon component={home}></Icon>
            </MT2Div>
            <PL3Div>
              <Typography
                variant="overline2"
                color="text.disabled"
                data-testid="addressType"
              >
                {addressSelected}
                {leftBraces}
                {addressType}
                {rightBraces}
              </Typography>
            </PL3Div>
          </FlexDiv>
          <MTN3Div>
            <MTN3Div>
              <ButtonComponent variant="text" onClick={onClick}>
                <Typography variant="overline2" color="primary.main">
                  {change}
                </Typography>
              </ButtonComponent>
            </MTN3Div>
          </MTN3Div>
        </StyledDiv>
        <FlexDiv>
          <Typography
            variant="overline2"
            color="text.primary"
            data-testid="address"
          >
            {address}
          </Typography>
        </FlexDiv>
      </div>
    </StyledCard4>
  );
};

export default AddressCard;
