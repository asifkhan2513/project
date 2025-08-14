import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice";
import employeeReducer from "../slices/employeeSlice";
import salaryReducer from "../slices/salarySlice";
import attendanceReducer from "../slices/attendanceSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  employees: employeeReducer,
  salary: salaryReducer,
  attendance: attendanceReducer,
});

export default rootReducer;
