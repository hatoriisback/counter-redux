// ? import configureStore dari RTK
import { configureStore } from "@reduxjs/toolkit";

// ? import reducer-nya
import counterReducer from "./slices/counterSlice";

// ? Buat store-nya dengan configureStore()
// * configureStore(configureStoreOptions)
// * configureStoreOptions => { reducer: { Reducer } }
export const store = configureStore({
  // * WAJIB
  reducer: {
    // * namaReducer: isiReducer
    counter: counterReducer,
  },
});
