import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice"; // adjust path as needed
import cartReducer from "./features/cart/cartSlics";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart : cartReducer,
  },
});

export default store;
