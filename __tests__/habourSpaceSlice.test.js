import { configureStore } from "@reduxjs/toolkit";
import habourSpaceReducer, { fetchData } from "../src/app/habourSpaceSlice";

// enable fetch mocks
require("jest-fetch-mock").enableMocks();

describe("habourSpace reducer", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("fetches data from API", async () => {
    const mockData = { data: "mockData" };

    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const store = configureStore({
      reducer: {
        habourSpace: habourSpaceReducer,
      },
    });

    await store.dispatch(fetchData());

    expect(store.getState()).toEqual({
      habourSpace: {
        data: mockData,
        error: null,
      },
    });
  });
});
