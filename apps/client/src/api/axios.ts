import axios, { AxiosInstance } from "axios";
import { config } from "../../config";
import {
  LoginBody,
  LoginResponse,
  ProfileResponse,
  SignUpBody,
  SignUpResponse,
  UpdateProfileBody,
} from "@rrdx-mono/types";

/** REST API calls */
export class Api {
  axiosInstance: AxiosInstance;

  /** The base url of the API */
  constructor(baseUrl: string) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
      validateStatus: (status) => status >= 200 && status < 300,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  /** Login to the API. If the login is successful, the token is stored in the redux store */
  async login(credentials: LoginBody): Promise<LoginResponse> {
    const { data } = await this.axiosInstance.post(`user/login`, credentials);
    return data;
  }

  /** Create an account.  */
  async signup(credentials: SignUpResponse): Promise<SignUpBody> {
    const { data } = await this.axiosInstance.post(`user/signup`, credentials);
    return data;
  }

  /** Get user profile data */
  async getProfile(): Promise<ProfileResponse> {
    const { data } = await this.axiosInstance.post(`user/profile`);
    return data;
  }

  /** Update user profile ( username and lastname ) */
  async updateProfile(firstAndLastName: UpdateProfileBody): Promise<ProfileResponse> {
    const { data } = await this.axiosInstance.put(`user/profile`, firstAndLastName);
    return data;
  }

  // Set authorization header token
  set requestToken(token: string | null) {
    this.axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default new Api(config.SERVER.BASE_URL);
