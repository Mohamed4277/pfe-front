import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, 
  persistStore,   
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER} from "redux-persist";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import cart from "../reducer/cart";
import user from "../reducer/user";
import adress from "../reducer/adress";
import paymentMode from "../reducer/paymentMode";
import category from "../reducer/category";
import wishList from "../reducer/wishList";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  cart: cart,
  category: category,
  user:user,
  adress:adress,
  paymentMode:paymentMode,
  wishList:wishList
});

const persisteReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persisteReducer,
  middleware:   (getDefaultMiddleware) => [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }}), thunk],
});

export const persistor = persistStore(store);

export default store;
