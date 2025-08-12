const BASE_URL = "http://localhost:5000/api/v1";

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",  // if need  in the future
  SIGNUP_API: BASE_URL + "/auth/signup",    //  
  LOGIN_API: BASE_URL + "/login",      //  
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",

  TOTAL_EMPLOYEES: BASE_URL + "/employees/count",
};
