import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface cartItems {
  id: number,
  name: string,
  img: string,
  price: number,
  quantity: number,
}


const initialState: cartItems[] = [
  {
    id: 1,
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 0,
  },
  {
    id: 2,
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 0,
  },
]

export const fetchCartList = createAsyncThunk("cartList/fetch", async(thunkAPI) => {
  const response = await fetch("http://localhost:3001/cartList", {
    method: "GET"
  })

  const data = response.json()
  console.log("Async Thunk fetchPerson:", data)

  return data
})


export const CartListInfoSlice = createSlice({
  name: 'cartListInfo',
  initialState,
  reducers: {
    increaseItem: (state, action: PayloadAction<{ id: number }>) => {
      state = state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity + 1
          }
        }
        else {
          return item
        }
      })

      console.log('increaseItem', state)
      return state
    },
    reduceItem: (state, action: PayloadAction<{ id: number }>) => {
      state = state.map((item) => {
        if ((item.id === action.payload.id) && (item.quantity > 0)) {
          return {
            ...item,
            quantity: item.quantity - 1
          }
        }
        else {
          return item
        }
      })
      
      console.log('reduceItem', state)
      return state
    },

    resetCartListInfo: (state) => {
      // state = [
      //   {
      //     id: 1,
      //     name: '貓咪罐罐',
      //     img: 'https://picsum.photos/300/300?text=1',
      //     price: 100,
      //     quantity: 0,
      //   },
      //   {
      //     id: 2,
      //     name: '貓咪干干',
      //     img: 'https://picsum.photos/300/300?text=2',
      //     price: 200,
      //     quantity: 0,
      //   },
      // ]

      state = state.map((item) => {
        return{
          ...item,
          quantity: 0
        }
      })

      // console.log('test: ',state)
      return state
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartList.fulfilled, (state, action) => {
      // console.log('fetchCartList: ', action.payload)

      state = action.payload

      return state
    })
  }
})

export default CartListInfoSlice.reducer
export const { increaseItem, reduceItem, resetCartListInfo } = CartListInfoSlice.actions