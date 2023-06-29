import { url } from "./utils/url";
import axios from "axios";

class AuthApi {
  static async login(body: any) {
    const result = await axios.post(`${url}/auth/login`, body);

    return result.data;
  }

  static async register(body: any) {
    const result = await axios.post(`${url}/auth/register`, body);

    return result.data;
  }
}

export default AuthApi;
