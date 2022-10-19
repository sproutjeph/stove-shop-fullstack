import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../stores/store";
import { CartItem } from "../../utils/types";
import { data } from "../../utils/data";
import axios from "axios";
const url = "https://course-api.com/react-useReducer-cart-project";

export interface CartState {
  isCartModalOpen: boolean;
  cartItems: CartItem[];
  amount: number;
  total: number;
}

const initialState: CartState = {
  isCartModalOpen: false,
  cartItems: data,
  amount: 0,
  total: 0,
};

export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
  try {
    const response = await axios(url);

    return response.data;
  } catch (error) {}
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCartModal: (cartState) => {
      cartState.isCartModalOpen = true;
    },
    closeCartModal: (cartState) => {
      cartState.isCartModalOpen = false;
    },
    increament: (cartState) => {
      cartState.amount += 1;
    },
    decreament: (cartState) => {
      cartState.amount -= 1;
    },
    incrementByAmount: (cartState, action: PayloadAction<number>) => {
      cartState.amount += action.payload;
    },
    clearCart: (cartState) => {
      cartState.cartItems = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCartItems.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.cartItems = payload;
    });
    builder.addCase(getCartItems.pending, (state, action) => {});
    builder.addCase(getCartItems.rejected, (state, action) => {});
  },
});

export const {
  decreament,
  increament,
  incrementByAmount,
  clearCart,
  closeCartModal,
  openCartModal,
} = cartSlice.actions;
export const selectCartState = (state: RootState) => state.cart;
// export const selectCartItems = (state: RootState) => state.cart.cartItems;

export default cartSlice.reducer;
