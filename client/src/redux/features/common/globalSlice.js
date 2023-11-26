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
  userType: "",
  isLoading: false,
};
export const globalSlice = createSlice({
  name: "globalAuth",
  initialState,
  reducers: {
    RESET_GLOBAL(state) {
      state.userType = "";
      state.isLoading = false;
      state.isLoggedin = false;
    },
    SET_GLOBAL(state , action) {
      state.userType = action.payload;
      state.isLoading = false;
      state.isLoggedin = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLoginStatus.pending, (state, action) => {
        state.isLoggedin = false;
        state.isLoading = true;
      })
      .addCase(getLoginStatus.fulfilled, (state, action) => {
        state.isLoggedin = action.payload.message;
        state.isLoading = false;
        state.userType = action.payload.userType;
        
      })
      .addCase(getLoginStatus.rejected, (state, action) => {
        state.isLoggedin = false;
        // console.log("Action" , action);
        state.userType = action.payload;
        state.isLoading = false;
      });
  },
});

export const {RESET_GLOBAL , SET_GLOBAL} = globalSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export default globalSlice.reducer;
