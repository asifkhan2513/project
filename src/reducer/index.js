import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice";
import employeeReducer from "../slices/employeeSlice";
import salaryReducer from "../slices/salarySlice";

const rootReducer = combineReducers({
  auth: authReducer,
  employees: employeeReducer,
  salary: salaryReducer,
});

export default rootReducer;
