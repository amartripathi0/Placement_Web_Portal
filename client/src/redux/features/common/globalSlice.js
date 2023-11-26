import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const getLoginStatus = createAsyncThunk(
  "getLoginStatus",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(BACKEND_URL);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  isLoggedin: false,
  message: "",
  isLoading: false,
};
export const globalSlice = createSlice({
  name: "globalAuth",
  initialState,
  reducers: {
    RESET_GLOBAL(state) {
      state.message = "";
      state.isLoading = false;
      state.isLoggedin = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLoginStatus.pending, (state, action) => {
        state.isLoggedin = false;
        state.isLoading = true;
      })
      .addCase(getLoginStatus.fulfilled, (state, action) => {
        state.isLoggedin = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(getLoginStatus.rejected, (state, action) => {
        state.isLoggedin = false;
        // console.log("Action" , action);
        state.message = action.payload;
        state.isLoading = false;
      });
  },
});

export const {RESET} = globalSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export default globalSlice.reducer;
