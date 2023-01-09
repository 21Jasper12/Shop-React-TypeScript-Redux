import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import shoppingStatusReducer from "./feature/shoppingStatus";


export const store = configureStore({
  reducer: {
    shoppingStatus: shoppingStatusReducer
  }
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector