// Slice是action和reducer的合集
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  // 命名空间
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      console.log(action);
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, reset } =
  counterSlice.actions;

export default counterSlice.reducer;
