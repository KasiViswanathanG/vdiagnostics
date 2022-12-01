import Axios from "axios";
import properties from "../core-utils/properties";

export class UserService {
  static getGoogleUser(token: string): Promise<any> {
    return Axios.get("https://" + properties.auth0Domain + "/userinfo", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
}
