import {
  ForgetPasswordDto,
  ForgetPasswordOtpDto,
  LoginDto,
  RegistrationDto,
  ResetPasswordEmailDto,
  VerifyOtpDto,
} from "./auth.dto";

import { jwtDecode } from "jwt-decode";
import moment from "moment";

import { ELocalStorageKeys } from "@/constants/local-storage-keys";
import http from "@/utils/Http";
import { ENDPOINTS } from "@/constants/endpoints";

let accessToken = localStorage.getItem(ELocalStorageKeys.ACCESS_TOKEN) ?? "";
let refreshToken = localStorage.getItem(ELocalStorageKeys.REFRESH_TOKEN) ?? "";

type TTokensObject = {
  newAccessToken: string;
  newRefreshToken: string;
};

interface ILoginData {
  accessToken: string;
  refreshToken: string;
  company: string;
  user: string;
  permissions: string;
}

interface IToken {
  _id: number;
  role: string;
  iat: number;
  exp: number;
}

class AuthService {
  private broadcastChannel = new BroadcastChannel("auth_channel");

  constructor() {
    this.broadcastChannel.onmessage = (message) => {
      if (message.data === "logout") {
        this.handleLogout();
      }
    };
  }

  private _decodeToken(token: string): any | null {
    try {
      const decoded = jwtDecode(token);
      return decoded;
    } catch (e) {
      return null;
    }
  }

  /** SETTERS */
  setToken({ newAccessToken, newRefreshToken }: TTokensObject): void {
    if (!newAccessToken) {
      localStorage.removeItem(ELocalStorageKeys.ACCESS_TOKEN);
    }
    if (!newRefreshToken) {
      localStorage.removeItem(ELocalStorageKeys.REFRESH_TOKEN);
    }

    accessToken = newAccessToken;
    refreshToken = newRefreshToken;

    localStorage.setItem(ELocalStorageKeys.ACCESS_TOKEN, newAccessToken);
    localStorage.setItem(ELocalStorageKeys.REFRESH_TOKEN, newRefreshToken);
  }

  /** GETTERS */
  async getDecodedToken(): Promise<ILoginData | null> {
    const token = await this.getToken();
    if (!token) {
      return null;
    }
    return this._decodeToken(token);
  }

  async getToken(): Promise<string | null> {
    if (!this.hasExpired()) {
      return accessToken;
    } // will return null if not existed
    return await this.refreshToken();
  }

  async isLoggedIn(): Promise<boolean> {
    const token = await this.getToken();
    return !!token;
  }

  hasExpired(): boolean {
    if (!accessToken) {
      return false;
    }
    const decodedToken = jwtDecode<IToken>(accessToken);

    if (!decodedToken?.exp) {
      return true;
    }

    const now = moment();
    const expiryDate = moment.unix(decodedToken.exp);

    return expiryDate.isSameOrBefore(now, "minute");
  }

  /* METHODS */
  private handleLogout() {
    this.setToken({ newAccessToken: "", newRefreshToken: "" });
    localStorage.removeItem(ELocalStorageKeys.COMPANY);
    localStorage.removeItem(ELocalStorageKeys.USER);
    localStorage.removeItem(ELocalStorageKeys.REFRESH_TOKEN);
    localStorage.removeItem(ELocalStorageKeys.ACCESS_TOKEN);
    localStorage.removeItem(ELocalStorageKeys.USER_PERMISSIONS);
    window.location.reload(); // Force reload to clear state
  }

  public logout(): void {
    this.broadcastChannel.postMessage("logout");
    this.handleLogout();
  }

  async refreshToken(): Promise<string | null> {
    if (!this.hasExpired()) {
      return refreshToken;
    }

    try {
      const loginData = await http
        .post(ENDPOINTS.REFRESH_TOKEN, { token: refreshToken })
        .then(({ data }) => data as ILoginData);

      this.setToken({
        newAccessToken: loginData.accessToken,
        newRefreshToken: loginData.refreshToken,
      });

      return loginData.accessToken;
    } catch (e) {
      this.logout();
      return null;
    }
  }

  // API
  public async register(obj: RegistrationDto): Promise<any> {
    const { data } = await http.post(ENDPOINTS.REGISTER, obj);

    if (data) {
      const loginData = data as ILoginData;
      this.setToken({
        newAccessToken: loginData.accessToken,
        newRefreshToken: loginData.refreshToken,
      });
      localStorage.setItem(ELocalStorageKeys.COMPANY, JSON.stringify(loginData.company));
      localStorage.setItem(ELocalStorageKeys.USER, JSON.stringify(loginData.user));
      localStorage.setItem(ELocalStorageKeys.USER_PERMISSIONS, JSON.stringify(loginData.permissions));
    }

    return data;
  }

  public async Login(obj: LoginDto): Promise<any> {
    const { data } = await http.post(ENDPOINTS.LOGIN, obj);

    if (data) {
      const loginData = data as ILoginData;
      this.setToken({
        newAccessToken: loginData.accessToken,
        newRefreshToken: loginData.refreshToken,
      });
      localStorage.setItem(ELocalStorageKeys.COMPANY, JSON.stringify(loginData.company));
      localStorage.setItem(ELocalStorageKeys.USER, JSON.stringify(loginData.user));
      localStorage.setItem(ELocalStorageKeys.USER_PERMISSIONS, JSON.stringify(loginData.permissions));
    }

    return data;
  }

  public async forgotPasswordOtp(obj: ForgetPasswordOtpDto): Promise<any> {
    const { data } = await http.post(ENDPOINTS.FORGOT_PASSWORD_VERIFY_OTP, obj);
    return data;
  }

  public async enterOtp(obj: VerifyOtpDto): Promise<any> {
    const { data } = await http.post(ENDPOINTS.VERIFY_OTP, obj);
    return data;
  }

  public async forgetPassword(obj: ForgetPasswordDto): Promise<any> {
    const { data } = await http.post(ENDPOINTS.FORGET_PASSWORD, obj);
    return data.payload?.data as any;
  }

  public async resetPasswordEmail(obj: ResetPasswordEmailDto): Promise<any> {
    const { data } = await http.post(ENDPOINTS.RESET_PASSWORD_EMAIL, obj);
    return data.payload?.data as any;
  }
}

export default Object.freeze(new AuthService());
