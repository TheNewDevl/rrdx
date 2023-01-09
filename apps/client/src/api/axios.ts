import axios from "axios";
import { config } from "../../config";

export default axios.create({
  baseURL: config.SERVER.BASE_URL,
  validateStatus: (status) => status >= 200 && status < 300,
  headers: {
    "Content-Type": "application/json",
  },
});
