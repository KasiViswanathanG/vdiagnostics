import { styled, Tabs, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import React from "react";
import { COLORS } from "../../theme/Colors/index";
interface TabsProps {
  value: number;
  label: string;
}

interface CustomTabProps {
  tabs: Array<TabsProps>;
  // eslint-disable-next-line no-unused-vars
  stateHandler: (val: number) => void;
  value: number;
}

const CustomTabs = styled(Tabs)({
  width: "inherit",
  "& .MuiTabs-indicator": {
    height: "2px",
    backgroundColor: `${COLORS.ALPHA_BLUE_500}`,
    borderRadius: "8px",
    marginBottom: "10px",
  },
});
const HomePageTabs = ({ tabs, stateHandler, value }: CustomTabProps) => {
  return (
    <CustomTabs value={value} data-testid="tabbox">
      {tabs &&
        tabs.map((curr: TabsProps, index: number) => {
          return (
            <Tab
              value={curr.value}
              label={<Typography variant="caption2">{curr.label}</Typography>}
              data-testid={`tab-${curr.value}`}
              sx={{
                minWidth: "0px",
                textTransform: "none",
                color: `${COLORS.TEXT_HIGH}`,
                margin: "0em 9em",
              }}
              onClick={() => {
                stateHandler(curr.value);
              }}
              key={index}
            ></Tab>
          );
        })}
    </CustomTabs>
  );
};

export default HomePageTabs;
