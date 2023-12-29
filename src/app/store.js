// store.js

import { configureStore } from "@reduxjs/toolkit";
import habourSpaceReducer from "./habourSpaceSlice";

export const store = configureStore({
  reducer: {
    habourSpace: habourSpaceReducer,
  },
});
