
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../axiosInstance"; // Axios instance with token setup

// Fetch total employee count
export const fetchTotalEmployees = createAsyncThunk(
  "employees/fetchTotalEmployees",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("/employees/count"); // GET total count API
      return res.data.total || res.data.count; // adjust according to backend response
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Fetch full employee list
export const fetchEmployeeList = createAsyncThunk(
  "employees/fetchEmployeeList",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("/employees"); // GET full employee list API
      return res.data.employees; // adjust if backend sends different field
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const employeeSlice = createSlice({
  name: "employees",
  initialState: {
    total: 0,
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Total count cases
      .addCase(fetchTotalEmployees.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTotalEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.total = action.payload;
      })
      .addCase(fetchTotalEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Employee list cases
      .addCase(fetchEmployeeList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEmployeeList.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchEmployeeList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default employeeSlice.reducer;
