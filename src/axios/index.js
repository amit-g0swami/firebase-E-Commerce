import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Request failed! Please try again later.");
      }
    } else if (error.request) {
      toast.error("No response from the server. Please try again later.");
    } else {
      toast.error("An unexpected error occurred. Please try again later.");
    }

    return Promise.reject(error);
  }
);

export default api;
