import axios, { AxiosError } from "axios";
import store from "@/store/index";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.VUE_APP_PUBLIC_API_URL
      : process.env.VUE_APP_DEV_API_URL,
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
});
instance.interceptors.request.use(
  (config) => {
    if (config.headers) {
      config.headers.Authorization = store.getters["auth/user/GET_TOKEN"];
    }
    return config;
  },
  function (error: Error | AxiosError) {
    return Promise.reject(error);
  }
);

export default instance;
