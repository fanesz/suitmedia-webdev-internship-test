import axios from "axios";

const headers = {
  Accept: "application/json",
};

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
  headers,
});

export default api;
