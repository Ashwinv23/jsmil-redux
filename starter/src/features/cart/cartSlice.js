import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  total: 0,
  amount: 1,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },
    inOrDecItem: (state, action) => {
      const { id, type } = action.payload;
      const particularItem = state.cartItems.find((item) => item.id === id);
      if (type === "increase") particularItem.amount++;
      if (type === "decrease") particularItem.amount--;
    },
    calcTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.total = total;
      state.amount = amount;
    },
  },
});

export const { clearCart, removeItem, inOrDecItem, calcTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
