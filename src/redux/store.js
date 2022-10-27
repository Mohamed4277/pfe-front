import { configureStore } from "@reduxjs/toolkit";
import cart from "../reducer/cart";
import user from "../reducer/user";
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


const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  cart: cart,
  user:user,
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
