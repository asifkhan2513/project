import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

// Intercept every request and add token
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token"); // get token from storage
  if (token) {
    req.headers.Authorization = `Bearer ${token}`; // attach token to header
  }
  return req;
});

export default API;
