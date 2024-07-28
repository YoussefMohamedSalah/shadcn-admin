import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ELocalStorageKeys } from "@/constants/local-storage-keys";
import { getLocalStorageItem } from "@/utils/localStorage";
import { RootState } from "@/contexts/store";
import authService from "@/api/services/Auth/auth.service";
import { ISessionUser } from "@/types/Session.type";

// Load user from local storage or set to empty object if not found
const initialState = getLocalStorageItem(ELocalStorageKeys.USER) || {};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<ISessionUser>) {
      const { id, name, email, phone_number, role, shift_start, shift_end } = action.payload;
      const newUser = { id, name, email, phone_number, role, shift_start, shift_end };
      localStorage.setItem(ELocalStorageKeys.USER, JSON.stringify(newUser));
      return { ...state, ...newUser };
    },

    logout() {
      authService.logout();
      return { ...initialState };
    },

    setPortalUser: (state, action: PayloadAction<ISessionUser>) => {
      const { id, name, email, phone_number, role, shift_start, shift_end } = action.payload;
      const newUser = { id, name, email, phone_number, role, shift_start, shift_end };
      localStorage.setItem(ELocalStorageKeys.USER, JSON.stringify(newUser));
      return { ...state, ...newUser };
    },
  },
});

// Selectors
export const selectAuth = (state: RootState): ISessionUser => state.auth;

// Actions
export const { logout: logoutAction, login: loginAction, setPortalUser } = authSlice.actions;

export default authSlice.reducer;
