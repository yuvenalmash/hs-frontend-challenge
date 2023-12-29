// habourSpaceSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  error: null,
};

export const fetchData = createAsyncThunk("habourSpace/fetchData", async () => {
  const apiEndpoint =
    "https://pre-prod.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab";

  const response = await fetch(apiEndpoint);
  const data = await response.json();
  return data;
});

export const habourSpaceSlice = createSlice({
  name: "habourSpace",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const selectData = (state) => state.habourSpace.data;

export default habourSpaceSlice.reducer;
