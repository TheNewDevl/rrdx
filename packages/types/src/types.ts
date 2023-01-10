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
  remember: boolean;
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

export interface SignUpBody {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface SignUpResponse {
  status: 200;
  message: "User successfully created";
  body: {
    _id: "63bd42d6f964718ccfa44118";
    email: "string";
    password: "$2b$12$rMdBl.WYJhuvqVYiZLGsPuLZV/6TdX.J/occS6a.2n3WMYeqsEgZC";
    firstName: "string";
    lastName: "string";
    createdAt: "2023-01-10T10:49:58.187Z";
    updatedAt: "2023-01-10T10:49:58.187Z";
    __v: 0;
  };
}
