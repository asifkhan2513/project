import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice";
import employeeReducer from "../slices/employeeSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  employees: employeeReducer,
});

export default rootReducer;
