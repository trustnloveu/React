import { createSlice } from "@reduxjs/toolkit";
import { Axios } from "../http/axios";

import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    // sum: 0,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      state.totalQuantity++;

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

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending Cart Data.",
      })
    );

    const sendRequest = async () => {
      const response = await Axios.put("/cart.json", {
        data: cart,
      });

      if (response.status !== 200) {
        throw new Error("Sent Cart Data Failed.");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sent Cart Data Successfully.",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sent Cart Data Failed.",
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice;
