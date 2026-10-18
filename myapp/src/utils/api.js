import axios from "axios";
import { BACKEND_URL } from "../config";

const api = axios.create({
  baseURL: BACKEND_URL,
  timeout: 60000,
  headers: {
    Accept: "application/json",
  },
});

export default api;
