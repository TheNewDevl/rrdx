export interface ClientConfig {
  SERVER: {
    PORT: string;
    HOST: string;
    BASE_URL: string;
  };
}

export enum RequestStateEnum {
  UPDATING = "updating",
  RESOLVED = "resolved",
  REJECTED = "rejected",
  PENDING = "pending",
  VOID = "void",
}

export interface AuthState {
  token: string | null;
  status: RequestStateEnum;
  error: any;
}

export interface User {
  email: string;
  firstName: string;
  lastName: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserState {
  user: User | null;
  status: RequestStateEnum;
  error: any;
}

export interface LoginResponse {
  body: {
    token: string;
  };
}

export interface LoginBody {
  email: string;
  password: string;
}

export interface UpdateProfileBody {
  firstName: string;
  lastName: string;
}

export interface ProfileResponse {
  status: number;
  message: string;
  body: User;
}
