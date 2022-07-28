import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 4000,
  status: 'idle',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 500;
    },
    decrement: (state) => {
      state.value -= 500;
    }
  }



});

export const { increment, decrement, increments, decrements } = counterSlice.actions;

export default counterSlice.reducer;
