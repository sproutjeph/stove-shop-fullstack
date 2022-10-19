import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import cartReducer from "../featuers/cart/cartSlice";
import authReducer from "../featuers/auth/authSlice";
import modalReducer from "../featuers/modal/modalSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    modal: modalReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
