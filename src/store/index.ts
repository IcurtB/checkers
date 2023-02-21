import { configureStore } from "@reduxjs/toolkit";
import checkers from "./checkers";
import checkersCell from "./checkers-cell";
const store = configureStore({
  reducer: {
    check: checkers,
    bigCheck: checkersCell,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
