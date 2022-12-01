const prod = process.env.NODE_ENV === "production";

const getBaseUrl = () => {
  return prod
    ? "https://vdiagnostics.up.railway.app/"
    : "http://localhost:3001/";
};

const getRedirectUrl = () => {
  return prod
    ? "https://vdiagnostics.up.railway.app/"
    : "http://localhost:3000/";
};

const properties = {
  baseURL: getBaseUrl(),
  auth0Domain: "dev-0jq6glalqnlqqw3t.us.auth0.com",
  auth0ClientId: "3esS4lNvpCGyCbRv6IH6Iq1lAE7iX5dw",
  auth0RedirectURI: getRedirectUrl(),
  googleConnection: "google-oauth2",
  facebookConnection: "facebook",
  appleConnection: "apple",
};

export default properties;
