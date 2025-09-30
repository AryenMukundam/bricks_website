import axios from "axios"
import { API_BASE_URL } from "./config"

const api = axios.create({
    baseURL : API_BASE_URL,
    withCredentials : true,
})

export const login = async (studentData) => {
  try {
    const response = await api.post("/students/login", studentData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logout = async () => {
  try {
    const response = await api.get("/students/logout", 
      {withCredentials:true}
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};