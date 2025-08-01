import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

// Define the base URL for your backend API
const BASE_URL = "http://localhost:5000/api/v1";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,
};

// Async thunk for handling the login API call
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password, navigate }, { rejectWithValue }) => {
    try {
      // Make the API call to your backend's login endpoint
      const response = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });

      // Show a success message
      toast.success("Login Successful");

      // Redirect based on user account type
      if (response?.data?.user.role === "Admin") {
        navigate("/admin/overview");
      } else {
        navigate("/login");
      }
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Login failed. Please try again.";
      toast.error(message);
      return rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
