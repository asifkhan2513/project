// src/store/salarySlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../axiosInstance";

// Generate salary (POST /salary/generate)
export const generateSalary = createAsyncThunk(
  "salary/generateSalary",
  async (payload, { rejectWithValue }) => {
    try {
      // payload should match backend body:
      // { employeeId, month, year, basic, allowance, deductions, totalWorkingDays, autoCalculate }
      const res = await API.post("/salary/generate", payload);
      // backend returns { success: true, salary } in your controller, so return salary
      return res.data.salary;
    } catch (err) {
      const message = err.response?.data?.message || err.message || "Failed";
      return rejectWithValue(message);
    }
  }
);

// Optional: fetch salaries list (adjust path if your backend differs)
export const fetchSalariesList = createAsyncThunk(
  "salary/fetchSalariesList",
  async (_, { rejectWithValue }) => {
    try {
      // adjust endpoint if your backend uses /salaries or /salary/list
      const res = await API.get("/salary");
      return res.data.salaries || res.data.salaryRecords || res.data.data || [];
    } catch (err) {
      const message = err.response?.data?.message || err.message || "Failed";
      return rejectWithValue(message);
    }
  }
);

const salarySlice = createSlice({
  name: "salary",
  initialState: {
    list: [],
    generatedSalary: null,
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    clearSalaryState: (state) => {
      state.generatedSalary = null;
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // generate
      .addCase(generateSalary.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(generateSalary.fulfilled, (state, action) => {
        state.loading = false;
        state.generatedSalary = action.payload;
        state.success = true;
        // optionally push into list
        state.list.unshift(action.payload);
      })
      .addCase(generateSalary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })

      // list
      .addCase(fetchSalariesList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSalariesList.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchSalariesList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSalaryState } = salarySlice.actions;
export default salarySlice.reducer;
