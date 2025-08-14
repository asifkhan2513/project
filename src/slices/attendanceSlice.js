import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../axiosInstance";

const initialState = {
  list: [],
  attendanceData: {},
  loading: false,
  saving: false,
  error: null,
};

// Async thunk to mark attendance on server
export const markAttendance = createAsyncThunk(
  "attendance/markAttendance",
  async (attendanceData, { rejectWithValue }) => {
    try {
      const res = await API.post("/attendance/mark", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(attendanceData),
      });

      if (!res.ok) throw new Error("Failed to mark attendance");

      return await res.json();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const attendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {
    // Update status locally before sending to API
    setLocalAttendanceStatus: (state, action) => {
      const { employeeId, status } = action.payload;
      state.attendanceData[employeeId] = status;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(markAttendance.pending, (state) => {
        state.saving = true;
      })
      .addCase(markAttendance.fulfilled, (state, action) => {
        state.saving = false;
        // If you want to replace or merge data
        state.list.push(action.payload);

        // Update attendanceData from response
        const { employeeId, status } = action.payload;
        if (employeeId && status) {
          state.attendanceData[employeeId] = status;
        }
      })
      .addCase(markAttendance.rejected, (state, action) => {
        state.saving = false;
        state.error = action.payload;
      });
  },
});

export const { setLocalAttendanceStatus } = attendanceSlice.actions;

export default attendanceSlice.reducer;
