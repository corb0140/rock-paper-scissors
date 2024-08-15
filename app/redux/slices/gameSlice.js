import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
  isPlaying: false,
  isGameOver: false,
  pick: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame(state) {
      state.isPlaying = true;
    },
    endGame(state) {
      state.isPlaying = false;
    },
    setPick(state, action) {
      state.pick = action.payload;
    },
    incrementScore(state) {
      state.score += 1;
    },
    resetScore(state) {
      state.score = 0;
    },
    endGame(state) {
      state.isPlaying = false;
      state.isGameOver = true;
    },
    restartGame(state) {
      state.isPlaying = true;
      state.isGameOver = false;
    },
  },
});

export const {
  startGame,
  endGame,
  setPick,
  incrementScore,
  resetScore,
  restartGame,
} = gameSlice.actions;

export default gameSlice.reducer;
