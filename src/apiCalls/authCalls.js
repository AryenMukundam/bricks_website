import axios from "axios";
import { API_BASE_URL } from "./config";


const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, 
});

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
};

api.interceptors.request.use(
  (config) => {
    const token = getCookie('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);


export const studentlogin = async (studentData) => {
  try {
    const response = await api.post("/students/login", studentData);
    return response.data;
  } catch (error) {
    throw {
      message: error.response?.data?.errors?.[0]?.msg || 
               error.response?.data?.msg || 
               'Login failed. Please try again.'
    };
  }
};

export const studentlogout = async () => {
  try {
    const response = await api.post("/students/logout");
    return response.data;
  } catch (error) {
    throw {
      message: error.response?.data?.msg || 'Logout failed'
    };
  }
};


export const instructorlogin = async (instructorData) => {
  try {
    const response = await api.post("/instructors/login", instructorData);
    return response.data;
  } catch (error) {
    throw {
      message: error.response?.data?.errors?.[0]?.msg || 
               error.response?.data?.msg || 
               'Login failed. Please try again.'
    };
  }
};

export const instructorlogout = async () => {
  try {
    const response = await api.post("/instructors/logout");
    return response.data;
  } catch (error) {
    throw {
      message: error.response?.data?.msg || 'Logout failed'
    };
  }
};
