import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { stepOneformState } from "../../components/StepOneInfoPart"
import { stepThreeformState } from "../../components/StepThreeInfoPart"

interface userShopInfo {
  stepOneInfo: stepOneformState,
  stepTwoInfo: number,
  stepThreeInfo: stepThreeformState
}

const initialState: userShopInfo = {
  stepOneInfo: {
    userGender: 0,
    userName: '',
    userTel: '',
    userEmail: '',
    userCity: 0,
    userAdress: ''
  },
  stepTwoInfo: 0,
  stepThreeInfo: {
    userName: '',
    cardNumber: '',
    cardDeadLine: '',
    cardCvc: ''
  }
}


export const UserShopInfoSlice = createSlice({
  name: 'userShopInfo',
  initialState,
  reducers: {
    stepOneInfoChange: (state, action: PayloadAction<{
      formData: stepOneformState
    }>) => {
      state.stepOneInfo = action.payload.formData
  
      console.log('UserShopInfoSlice: ', Object.entries(state))
    },

    stepTwoInfoChange: (state, action: PayloadAction<{
      formData: number
    }>) => {
      state.stepTwoInfo = action.payload.formData

      console.log('UserShopInfoSlice: ', Object.entries(state))
    },

    stepThreeInfoChange: (state, action: PayloadAction<{
      formData: stepThreeformState
    }>) => {
      state.stepThreeInfo = action.payload.formData

      console.log('UserShopInfoSlice: ', Object.entries(state))
    }
  }

})

export default UserShopInfoSlice.reducer
export const { stepOneInfoChange, stepTwoInfoChange, stepThreeInfoChange } = UserShopInfoSlice.actions