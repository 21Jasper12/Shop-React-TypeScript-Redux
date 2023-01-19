import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import shoppingStatusReducer from "./feature/shoppingStatus";
import userShopInfoReducer from "./feature/UserShopInfo"
import cartListInfoReducer from "./feature/CartListInfo"
import initialDataReducer from "./feature/InitialData"


export const store = configureStore({
  reducer: {
    shoppingStatus: shoppingStatusReducer,
    userShopInfo: userShopInfoReducer,
    cartListInfo: cartListInfoReducer,
    initialData: initialDataReducer
  }
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector