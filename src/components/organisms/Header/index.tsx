import React, { useState } from "react";
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  styled,
  Typography,
} from "@mui/material";
import Tabs from "../../molecules/HomePageTabs/index";
import { tabs } from "./constants";
import { ReactComponent as logouticon } from "../../../assets/icons/log-out.svg";
import logo from "../../../assets/vdlogo.png";
import Icon from "../../atoms/Icon";
import theme from "../../theme";
import { useAuth0 } from "@auth0/auth0-react";

interface Props {
  location: string;
  // eslint-disable-next-line no-unused-vars
  tabValue?: (val: number) => void;
  onClick?: any;
}

const CDiv = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

const StyledGrid = styled(Grid)({
  [theme.breakpoints.down("xs")]: {
    width: "100%",
    flexDirection: "column",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    flexDirection: "column",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    padding: "0em 1em",
  },
  [theme.breakpoints.up("lg")]: {
    width: "1186px",
    padding: "0em 1em",
  },
  [theme.breakpoints.up("xl")]: {
    width: "1186px",
    padding: "0em 1em",
  },
});

const Header = ({ location, tabValue, onClick }: Props) => {
  const { user, logout } = useAuth0();
  const [value, setValue] = useState<number>(0);
  const stateHandler = (val: number) => {
    setValue(val);
    tabValue && tabValue(val);
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <CDiv>
      <StyledGrid
        data-testid="header"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        boxShadow="0px 0px 26px rgba(233, 232, 237, 0.5)"
        minHeight="46px"
      >
        <Box display="flex">
          <img src={logo} alt="logo" style={{ height: "18%", width: "18%" }} />
          <Typography color="primary.dark" sx={{ marginLeft: "0.5em" }}>
            VDiagnostics
          </Typography>
        </Box>

        <Box>
          <Tabs tabs={tabs} stateHandler={stateHandler} value={value}></Tabs>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="400px"
        >
          <Box sx={{ marginTop: "0.2em", display: "flex" }}>
            <IconButton size="large" onClick={handleMenu} color="inherit">
              <Avatar src={user?.picture} />
            </IconButton>
            <Typography color="secondary.dark">{user?.name}</Typography>
            <Menu
              sx={{ margin: "2.3em 0em 0em 5.9em" }}
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => logout()}>
                <Icon component={logouticon} />
                Log Out
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      </StyledGrid>
    </CDiv>
  );
};

export default Header;
