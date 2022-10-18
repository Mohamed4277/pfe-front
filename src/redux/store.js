import { configureStore } from "@reduxjs/toolkit";
import cart from "../reducer/cart";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  cart: cart,
});

const persisteReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persisteReducer,
});

export const persistor = persistStore(store);

export default store;
