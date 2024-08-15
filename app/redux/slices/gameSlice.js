import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
  pick: ["rock", "paper", "scissors"],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    incrementScore(state) {
      state.score += 1;
    },
    resetScore(state) {
      state.score = 0;
    },
  },
});

export const { incrementScore, resetScore } = gameSlice.actions;

export default gameSlice.reducer;
