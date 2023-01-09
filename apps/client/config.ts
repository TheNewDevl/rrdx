import { ClientConfig } from "@rrdx-mono/types";

const SERVER_PORT: string = "3001";
const SERVER_HOST: string = "localhost";
const SERVER_URL: string = `http://${SERVER_HOST}:${SERVER_PORT}/api/v1`;

export const config: ClientConfig = {
  SERVER: {
    PORT: SERVER_PORT,
    HOST: SERVER_HOST,
    BASE_URL: SERVER_URL,
  },
};
