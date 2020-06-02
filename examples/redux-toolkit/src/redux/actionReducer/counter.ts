import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};
type CounterState = typeof initialState;

const CounterModule = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: CounterState) => {
      state.count++;
    },
    decrement: (state: CounterState) => {
      state.count--;
    },
    setCount: (state: CounterState, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

export const { increment, decrement, setCount } = CounterModule.actions;
export default CounterModule.reducer;
