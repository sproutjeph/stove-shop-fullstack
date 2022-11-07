import axios from "axios";
import { IUserRegData } from "../utils/types";

const API_URL = "http://localhost:8000/api/v1/auth";

async function registerUser(user: IUserRegData) {
  const response = await axios.post(`${API_URL}/register`, user);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
}
async function loginUser(user: IUserRegData) {
  const response = await axios.post(`${API_URL}/login`, user);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
}

const logoutUser = () => {
  localStorage.removeItem("user");
};

export const authFunctions = {
  registerUser,
  loginUser,
  logoutUser,
};
