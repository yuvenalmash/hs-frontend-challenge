import { configureStore } from '@reduxjs/toolkit'

// Dummy reducer as a placeholder
const dummyReducer = (state = {}, action) => {
  return state;
};

export const store = configureStore({
  reducer: {
    dummy: dummyReducer,
  },
});