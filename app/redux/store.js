import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./slices/gameSlice";

const store = configureStore({
  reducer: {
    game: gameReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
