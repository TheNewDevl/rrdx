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

export interface LoginResponse {
  body: {
    token: string;
  };
}

export interface LoginBody {
  email: string;
  password: string;
}
