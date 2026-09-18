import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginUser = async (username, password) => {
  const response = await api.post("/user/login", {
    username,
    password,
  });

  return response.data;
};

export const signupUser = async (username, password) => {
  const response = await api.post("/user/createuser", {
    username,
    password,
  });

  return response.data;
};

export const verifyToken = async (token) => {
  const response = await api.get("/user/verify", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export default api;