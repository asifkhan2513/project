import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import API from "../axiosInstance";

// const initialState = {
//   list: [],
//   attendanceData: {},
//   loading: false,
//   saving: false,
//   error: null,
// };

// // Async thunk to mark attendance on server
// // export const markAttendance = createAsyncThunk(
// //   "attendance/markAttendance",
// //   async (attendanceData, { rejectWithValue }) => {
// //     try {
// //       const res = await API.post("/attendance/mark", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// //         },
// //         body: JSON.stringify(attendanceData),
// //       });

// //       if (!res.ok) throw new Error("Failed to mark attendance");

// //       return await res.json();
// //     } catch (err) {
// //       return rejectWithValue(err.message);
// //     }
// //   }
// // );

// export const markAttendance = createAsyncThunk(
//   "attendance/markAttendance",
//   async ({ employeeId, status }, { rejectWithValue }) => {
//     try {
//       // Log what you're sending to debug
//       console.log("Sending attendance data:", { employeeId, status });

//       const res = await API.post(
//         "/attendance/mark",
//         { employeeId, status },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );

//       return res.data.attendance; // adjust based on backend response
//     } catch (err) {
//       console.error("Attendance API error:", err.response?.data || err.message);
//       return rejectWithValue(
//         err.response?.data?.message || "Failed to mark attendance"
//       );
//     }
//   }
// );

// const attendanceSlice = createSlice({
//   name: "attendance",
//   initialState,
//   reducers: {
//     // Update status locally before sending to API
//     setLocalAttendanceStatus: (state, action) => {
//       const { employeeId, status } = action.payload;
//       state.attendanceData[employeeId] = status;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(markAttendance.pending, (state) => {
//         state.saving = true;
//       })
//       .addCase(markAttendance.fulfilled, (state, action) => {
//         state.saving = false;
//         // If you want to replace or merge data
//         state.list.push(action.payload);

//         // Update attendanceData from response
//         const { employeeId, status } = action.payload;
//         if (employeeId && status) {
//           state.attendanceData[employeeId] = status;
//         }
//       })
//       .addCase(markAttendance.rejected, (state, action) => {
//         state.saving = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { setLocalAttendanceStatus } = attendanceSlice.actions;

// export default attendanceSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../axiosInstance";

// ✅ Fetch today's attendance
// export const fetchTodayAttendance = createAsyncThunk(
//   "attendance/fetchToday",
//   async (employeeId, { rejectWithValue }) => {
//     try {
//       const res = await API.get("/attendance/today", {
//         params: employeeId ? { employeeId } : {},
//       });
//       console.log("param ", res);
//       console.log("data response", res.data);
//       return res.data.records;
//     } catch (err) {
//       return rejectWithValue(err.response?.data?.message || err.message);
//     }
//   }
// );

// // ✅ Mark attendance for today
// export const markAttendance = createAsyncThunk(
//   "attendance/markAttendance",
//   async ({ employeeId, status }, { rejectWithValue }) => {
//     try {
//       // const { data } = await API.put(`/attendance/today/${employeeId}`, {
//       //   status,
//       // });
//       // return data.attendance;

//       const { data } = await API.post(`/attendance/mark`, {
//         employeeId,
//         status,
//       });
//       return data.attendance; // Make sure your backend returns the saved record in a property named 'attendance'
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || error.message);
//     }
//   }
// );

export const markAttendance = createAsyncThunk(
  "attendance/markAttendance",
  async ({ employeeId, status }, { rejectWithValue }) => {
    try {
      const { data } = await API.post(`/attendance/mark`, {
        employeeId,
        status,
      });

      return data.attendance;
    } catch (error) {
      console.error("Backend Error:", error.response.data);
      return rejectWithValue(
        error.response.data.message || "Failed to mark attendance."
      );
    }
  }
);

export const fetchTodayAttendance = createAsyncThunk(
  "attendance/fetchToday",
  async (_, { rejectWithValue }) => {
    try {

      const res = await API.get("/attendance/today");

     
      return res.data.records || res.data;
    } catch (err) {
      console.error("Backend Error:", err.response?.data);
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch attendance."
      );
    }
  }
);
// ✅ Update today's attendance
export const updateTodayAttendance = createAsyncThunk(
  "attendance/updateToday",
  async ({ attendanceId, status }, { rejectWithValue }) => {
    try {
      const res = await API.put(`/attendance/today/${attendanceId}`, {
        status,
      });
      return res.data.attendance;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const attendanceSlice = createSlice({
  name: "attendance",
  initialState: {
    todayList: [],
    loading: false,
    error: null,
  },
  reducers: {
    // ✅ Local state update (Frontend Only)
    setLocalAttendanceStatus: (state, action) => {
      const { employeeId, status } = action.payload;
      const index = state.todayList.findIndex((r) => r.employee === employeeId);
      if (index !== -1) {
        state.todayList[index].status = status;
      } else {
        // If no record exists, push new
        state.todayList.push({
          employee: employeeId,
          status,
          date: new Date().toISOString(),
        });
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchTodayAttendance.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodayAttendance.fulfilled, (state, action) => {
        state.loading = false;
        state.todayList = action.payload;
      })
      .addCase(fetchTodayAttendance.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Mark Attendance
      .addCase(markAttendance.fulfilled, (state, action) => {
        const index = state.todayList.findIndex(
          (r) => r._id === action.payload._id
        );
        if (index !== -1) {
          state.todayList[index] = action.payload;
        } else {
          state.todayList.push(action.payload);
        }
      })

      // Update
      .addCase(updateTodayAttendance.fulfilled, (state, action) => {
        const index = state.todayList.findIndex(
          (r) => r._id === action.payload._id
        );
        if (index !== -1) {
          state.todayList[index] = action.payload;
        }
      });
  },
});

// ✅ Export actions
export const { setLocalAttendanceStatus } = attendanceSlice.actions;

// ✅ Export reducer
export default attendanceSlice.reducer;
