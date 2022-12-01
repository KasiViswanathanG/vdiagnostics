import React from "react";
import { styled } from "@mui/system";
import Button from "../../atoms/Button";
import { COLORS } from "../../theme/Colors/index";
import { ReactComponent as addicon } from "../../../assets/icons/add.svg";
import { Stack, Typography } from "@mui/material";
import Icon from "../../atoms/Icon";
import AddressMolecule from "../../molecules/AddressMolecule";
import RadioGroup from "@mui/material/RadioGroup";

type addressType = {
  houseNum: string;
  area: string;
  zipcode: string;
  cityState: string;
  id: number;
};

interface AddProps {
  handleNewClick?: () => void;
  addressList?: Array<addressType>;
  // eslint-disable-next-line no-unused-vars
  handleRadioChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NewPatientButton = styled(Button)({
  marginRight: "32px",
});
const NewPatientText = styled(Typography)({
  color: `${COLORS.ALPHA_BLUE_500}`,
  marginTop: "-0.4375em",
});

const StackA = styled(Stack)({
  flexDirection: "column",
  gap: "33px",
  borderRadius: "8px",
  width: "560px",
  padding: "33px 24px 33px 24px",
  borderColor: `${COLORS.GREY_100}`,
  boxShadow: "0px 0px 12px rgba(233, 232, 237, 0.53)",
});

const StackC = styled(Stack)({
  flexDirection: "row",
  alignItems: "start",
  justifyContent: "space-between",
  width: "560px",
});

const StackD = styled(Stack)({
  flexDirection: "row",
  gap: "16px",
});

const SelectText = styled(Typography)({
  color: `${COLORS.TEXT_MEDIUM}`,
  textTransform: "none",
});

const SelectAddress = ({
  addressList,
  handleNewClick,
  handleRadioChange,
}: AddProps) => {
  return (
    <StackA>
      <StackC>
        <SelectText data-testid="heading" variant="subtitle1">
          Select Address
        </SelectText>
        <NewPatientButton onClick={handleNewClick}>
          <Icon component={addicon} inheritViewBox={true}></Icon>
          <NewPatientText data-testid="heading2" variant="bodyMedium">
            Add Address
          </NewPatientText>
        </NewPatientButton>
      </StackC>
      <StackD>
        <RadioGroup data-testid="radio1" onChange={handleRadioChange}>
          <Stack gap="16px">
            {addressList?.map((eachaddress: addressType, index: number) => {
              const { houseNum , area, zipcode, cityState, id } = eachaddress;

              const radio = id;
              const defaultVal = "Address" + index;
              const array = cityState.split(",");
              const finalCityState = array[0] + " " + array[1];
              // eslint-disable-next-line eqeqeq
              if (index == 0) {
                return (
                  <AddressMolecule
                    key={id}
                    addressDefault="Default Address"
                    addressType="Home"
                    house={houseNum}
                    road={area}
                    cityState={finalCityState}
                    zipcode={zipcode}
                    radioValue={radio}
                  ></AddressMolecule>
                );
              } else {
                return (
                  <AddressMolecule
                    key={id}
                    addressDefault={defaultVal}
                    addressType="Home"
                    house={houseNum}
                    road={area}
                    cityState={finalCityState}
                    zipcode={zipcode}
                    radioValue={radio}
                  ></AddressMolecule>
                );
              }
            })}
          </Stack>
        </RadioGroup>
      </StackD>
    </StackA>
  );
};

export default SelectAddress;
