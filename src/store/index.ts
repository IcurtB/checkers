import { configureStore } from "@reduxjs/toolkit";
import checkers from "./checkers";
const store = configureStore({
  reducer: {
    check: checkers,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
