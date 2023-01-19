import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { arrayState } from "../../components/StepOneInfoPart"
import { shipFeeStatus } from "../../components/StepTwoInfoPart"

interface dataSet {
  gender: arrayState[],
  city: arrayState[],
  shipFee: shipFeeStatus[]
}

const initialState: dataSet = {
  gender: [],
  city: [],
  shipFee: []
}

export const fetchData = createAsyncThunk("initialData/fetch", async(thunkAPI) => {
  const response = await fetch("http://localhost:3001/initialData", {
    method: "GET"
  })

  const data = response.json()
  console.log("Async Thunk fetchPerson:", data)

  return data
})


export const InitialDataSlice = createSlice({
  name: 'initialData',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      console.log("fetch: ", action.payload)

      state.gender = action.payload.gender
      state.city = action.payload.city
      state.shipFee = action.payload.shipFee

      return state
    })
  }
})

export default InitialDataSlice.reducer