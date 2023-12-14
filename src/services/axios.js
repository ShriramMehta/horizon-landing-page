import axios from "axios";
import baseURL from "../constants/baseURL";

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("project_user"));
    config.headers.Authorization = user?.token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("project_user");
      window.location.href = "/signin";
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
