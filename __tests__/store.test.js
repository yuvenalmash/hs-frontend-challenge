// store.test.js

import { configureStore } from "@reduxjs/toolkit";
import habourSpaceReducer from "../src/app/habourSpaceSlice";

describe("store", () => {
  const store = configureStore({
    reducer: {
      habourSpace: habourSpaceReducer,
    },
  });

  it("should return the initial state", () => {
    expect(store.getState()).toEqual({
      habourSpace: {
        data: null,
        error: null,
      },
    });
  });

  it("should handle fetchData.pending", () => {
    store.dispatch({ type: "habourSpace/fetchData/pending" });
    expect(store.getState()).toEqual({
      habourSpace: {
        data: null,
        error: null,
      },
    });
  });

  it("should handle fetchData.fulfilled", () => {
    store.dispatch({
      type: "habourSpace/fetchData/fulfilled",
      payload: { data: "data" },
    });
    expect(store.getState()).toEqual({
      habourSpace: {
        data: { data: "data" },
        error: null,
      },
    });
  });

  it("should handle fetchData.rejected", () => {
    store.dispatch({
      type: "habourSpace/fetchData/rejected",
      payload: { error: "error" },
    });
    expect(store.getState()).toEqual({
      habourSpace: {
        data: { data: "data" },
        error: { error: "error" },
      },
    });
  });
});
