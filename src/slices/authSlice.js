import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../axiosInstance"; // use the custom axios
import { toast } from "react-hot-toast";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password, navigate }, { rejectWithValue }) => {
    try {
      const response = await API.post("/verifyToken/login", {
        email,
        password,
      });

      const { user, token } = response.data;

      // Save token and user to localStorage
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      toast.success("Login Successful");

      if (user.role === "Admin") {
        navigate("/admin/overview");
      } else {
        navigate("/login");
      }

      return { user, token };
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Login failed. Please check credentials.";
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
      toast.success("Logged out successfully");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
