import { createSlice } from "@reduxjs/toolkit";

//* initialAuthState
const initialAuthState = { isAuthenticated: false };

//* authSlice
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

//* export
export const authActions = authSlice.actions; // 'login', 'logout'
export default authSlice.reducer;
