import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface shoppingStatus {
  status: number
}

let initialState: shoppingStatus = {
  status: 1
}

// 控制購物清單狀態
export const ShoppingStatusSlice = createSlice({
  name: 'shoppingStatus',
  initialState,
  reducers:{
    ShoppingChangeStatus: (state, action: PayloadAction<{ status: number}>) => {
      state.status = action.payload.status
    }
  }
})

export default ShoppingStatusSlice.reducer
export const { ShoppingChangeStatus } = ShoppingStatusSlice.actions