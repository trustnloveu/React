import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
    // sum: 0,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      state.totalQuantity++;
      state.changed = true;

      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        // It's fine in 'redux-toolkit', because it's immutable
        state.items.push({
          id: newItem.id,
          name: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++; // quantity
        existingItem.totalPrice = existingItem.totalPrice + newItem.price; // price
      }
    },
    removeItemFromCart(state, action) {
      state.totalQuantity--;
      state.changed = true;

      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--; // quantity
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price; // price
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
