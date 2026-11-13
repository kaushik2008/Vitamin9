import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existing = state.items.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
    },
    removeItem: (state, action) => {
      const existing = state.items.find((item) => item.id === action.payload);
      if (!existing) return;
      state.totalQuantity -= existing.quantity;
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existing = state.items.find((item) => item.id === id);
      if (!existing) return;
      if (quantity <= 0) {
        state.totalQuantity -= existing.quantity;
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        state.totalQuantity += quantity - existing.quantity;
        existing.quantity = quantity;
      }
    },
    clearCart: () => initialState,
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;