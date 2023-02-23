import { configureStore } from "@reduxjs/toolkit";
import checkers from "./checkers";
import checkers_cell from "./checkers-cell";
const store = configureStore({
  reducer: {
    check: checkers,
    checkers_cell: checkers_cell,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
