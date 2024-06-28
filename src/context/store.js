import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import authSlice from "./slice/authSlice";
// import wishlistSlice from "./slices/wishlistSlice";
// import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    // wishlist: wishlistSlice,
    // cart: cartSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
