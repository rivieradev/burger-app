'use client';

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface OrderState {
  value: string[];
};

const initialState: OrderState = {
  value: []
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<string>) => {
      state.value = [...state.value, action.payload];
    },
    decrement: (state, action: PayloadAction<string>) => {
     const lastIndex = state.value.lastIndexOf(action.payload);
     
     if (lastIndex !== -1) {
      state.value.splice(lastIndex, 1);
     }
    }
  }
});

export const { increment, decrement } = orderSlice.actions;
export default orderSlice.reducer;