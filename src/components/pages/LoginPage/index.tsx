import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { COLORS } from "../../theme/Colors";
import Button from "../../atoms/Button";
import { ReactComponent as google } from "../../../assets/icons/google.svg";
import properties from "../../../core-utils/properties";
import vdlogo from "../../../assets/vdlogo.png";
import Icon from "../../atoms/Icon";
import { useAuth0 } from "@auth0/auth0-react";
import { SignUpWith } from "./constants";
import auth0 from "auth0-js";

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  boxShadow: "0px 0px 26px rgba(233, 232, 237, 0.5)",
  background: "#FFFFFF",
  width: "28%",
  height: "80%",
  borderRadius: "8px",
});

const Socials = styled(Box)({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  gap: "44px",
  marginTop: "12px",
  marginBottom: "40px",
});
const IconContainer = styled(Box)({
  padding: "8px",
  backgroundColor: `${COLORS.GREY_50}`,
  cursor: "pointer",
});

const Line = styled(Box)({
  width: "21.1%",
  border: `1px solid ${COLORS.GREY_100}`,
});

const Question = styled(Typography)({
  color: `${COLORS.TEXT_LOW}`,
  textTransform: "none",
});

const SignUpOption = styled(Typography)({
  color: `${COLORS.GREY_300}`,
  textTransform: "none",
  margin: "0px 10px",
});

const LoginText = styled(Typography)({
  textTransform: "none",
  fontWeight: "700 !important",
  marginTop: "1px",
});

const ContinueButton = styled(Button)({
  height: "7.72%",
  width: "87.4%",
  padding: "16px 8px",
  borderRadius: "8px",
  marginTop: "5.14%",
  marginBottom: "2.38%",
});
const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
    });
  };
  const handleSignUp = async () => {
    await loginWithRedirect({
      screen_hint: "signup",
      appState: {
        returnTo: "/profile",
      },
    });
  };
  const loginWithGoogle = () => {
    const webAuth = new auth0.WebAuth({
      domain: properties.auth0Domain,
      clientID: properties.auth0ClientId,
    });

    webAuth.popup.authorize(
      {
        nonce: "diagnostics",
        redirectUri: properties.auth0RedirectURI,
        connection: properties.googleConnection,
        clientId: properties.auth0ClientId,
        domain: properties.auth0Domain,
        scope: "openid profile email",
        responseType: "token",
        owp: true,
      },
      function (err, authResult) {
        if (err) {
          // eslint-disable-next-line no-console
          console.log(err);
        }
      }
    );
  };

  return (
    <Container data-testid="loginscreen">
      <Box
        marginTop="9%"
        marginBottom="5.88%"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            height: "9em",
            width: "9em",
          }}
          src={vdlogo}
          alt="logo"
        />
        <Typography color="primary" variant="h3">
          VDiagnostics
        </Typography>
        <Typography color="primary.light" variant="bodyMedium2">
          Online Medical Test Booking
        </Typography>
      </Box>
      <ContinueButton variant="contained" onClick={handleLogin}>
        Login
      </ContinueButton>

      <Box display="flex" alignItems="center" justifyContent={"center"}>
        <Question variant="regularCaption">Don't have an account ? </Question>
        <Button variant="text" data-testid="loginButton" onClick={handleSignUp}>
          <LoginText variant="button" color="secondary.dark">
            Sign Up
          </LoginText>
        </Button>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop="7.53%"
        width="100%"
      >
        <Line></Line>
        <SignUpOption variant="overline">{SignUpWith}</SignUpOption>
        <Line></Line>
      </Box>
      <Socials>
        <IconContainer onClick={loginWithGoogle} data-testid="iconbutton">
          <Icon component={google}></Icon>
        </IconContainer>
      </Socials>
    </Container>
  );
};

export default LoginPage;
