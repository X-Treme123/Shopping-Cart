import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.data.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.qty += 1;
      } else {
        state.data.push(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state.data)); // Update local storage
    },
    removeFromCart: (state, action) => {
      console.log("Removing item with ID:", action.payload.id); // Log
      state.data = state.data.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(state.data)); // Update local storage
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
