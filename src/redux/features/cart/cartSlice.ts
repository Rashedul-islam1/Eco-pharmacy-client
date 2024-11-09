import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

interface CartItem {
  _id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  stockQuantity: number;
  variant: string;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const item = state.items.find((item) => item._id === action.payload._id);
      if (item) {
        // Calculate total quantity of the item in the cart
        const totalQuantity = state.items.reduce(
          (acc, curr) =>
            curr._id === action.payload._id ? acc + curr.quantity : acc,
          0
        );
        // Check if adding the new quantity exceeds stock
        if (
          totalQuantity + action.payload.quantity >
          action.payload.stockQuantity
        ) {
          toast.error("Cannot exceed available stock.");
        } else {
          toast.success("Quantity updated successfully");
          item.quantity += action.payload.quantity;
        }
      } else {
        // Check if the quantity exceeds stock when adding a new item
        if (action.payload.quantity > action.payload.stockQuantity) {
          toast.error("Cannot exceed available stock.");
        } else {
          toast.success("Product added successfully");
          state.items.push(action.payload);
        }
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
    updateQuantity(
      state,
      action: PayloadAction<{
        _id: string;
        quantity: number;
        stockQuantity: number;
      }>
    ) {
      const item = state.items.find((item) => item._id === action.payload._id);
      if (item) {
        // Check if the updated quantity exceeds stock
        if (action.payload.quantity > action.payload.stockQuantity) {
          toast.error("Cannot exceed available stock.");
        } else {
          toast.success("Quantity updated successfully");
          item.quantity = action.payload.quantity;
        }
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
