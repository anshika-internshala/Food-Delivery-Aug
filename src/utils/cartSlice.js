import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      console.log("action", action);

      let item = state.items.find(
        (item) => item.card.info.id == action.payload.card.info.id
      );

      const data = { ...action.payload, quantity: 1 };

      if (!item) {
        state.items.push(data);
      } else {
        item.quantity++;
      }
    },
    removeItem: (state, action) => {
      let item = state.items.find(
        (item) => item.card.info.id == action.payload.card.info.id
      );

      item.quantity--;

      if (item.quantity == 0) {
        const items = state.items.filter(
          (item) => item.card.info.id != action.payload.card.info.id
        );
        state.items = items;
      }
    },
    clearCart: (state, action) => {
      console.log("clear cart");
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
