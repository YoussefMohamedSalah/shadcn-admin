import axios from "axios";
import ENV_KEYS from "@/config/env.config";
import { ELocalStorageKeys } from "@/constants/local-storage-keys";

export const http = axios.create({
  baseURL: ENV_KEYS.API_BASE_URL,
  timeout: 1000 * 60 * 30, // 30 minutes in milliseconds
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// Change request data/error here
http.interceptors.request.use(
  (config) => {
    const token: string = localStorage.getItem(ELocalStorageKeys.ACCESS_TOKEN) ?? "";
    if (token) {
      // @ts-expect-error: axios with ts error, this line must exists 
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default http;
