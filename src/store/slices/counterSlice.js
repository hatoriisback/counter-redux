// ? Import createSlice dari RTK
import { createSlice } from "@reduxjs/toolkit";

// ? Siapkan initial state-nya
const initialState = { count: 0 };

// ? Buat slice-nya dengan createSlice()
// * parameter: createSlice(CreateSliceOptions)
// * createSliceOptions -> {initialState: object, name: string, reducers: object}
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByTen: (state) => {
      state.count += 10;
    },
  },
});

// ? Export action-nya
export const { decrement, increment, incrementByTen } = counterSlice.actions;
// ? Export Reducer
export default counterSlice.reducer;
