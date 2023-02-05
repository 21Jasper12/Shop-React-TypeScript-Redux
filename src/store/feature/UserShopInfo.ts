import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { stepOneformState } from "../../components/StepOneInfoPart"
import { stepThreeformState } from "../../components/StepThreeInfoPart"
import { shipFeeStatus } from "../../components/StepTwoInfoPart"

interface userShopInfo {
  stepOneInfo: stepOneformState,
  stepTwoInfo: shipFeeStatus,
  stepThreeInfo: stepThreeformState,
  totalCount: number
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
  stepTwoInfo: {
    id: 0,
    fast: false,
    title: '',
    description: '',
    cost: 0
  },
  stepThreeInfo: {
    userName: '',
    cardNumber: '',
    cardDeadLine: '',
    cardCvc: ''
  },
  totalCount: 0
}


export const UserShopInfoSlice = createSlice({
  name: 'userShopInfo',
  initialState,
  reducers: {
    stepOneInfoChange: (state, action: PayloadAction<{
      formData: stepOneformState
    }>) => {
      state.stepOneInfo = action.payload.formData

      // console.log('UserShopInfoSlice: ', Object.entries(state))

      return state
    },

    stepTwoInfoChange: (state, action: PayloadAction<{
      formData: shipFeeStatus
    }>) => {
      state.stepTwoInfo = action.payload.formData

      // console.log('UserShopInfoSlice: ', Object.entries(state))

      return state
    },

    stepThreeInfoChange: (state, action: PayloadAction<{
      formData: stepThreeformState
    }>) => {
      state.stepThreeInfo = action.payload.formData

      // console.log('UserShopInfoSlice: ', Object.entries(state))

      return state
    },

    totalCountChange: (state, action: PayloadAction<{ totalCount: number }>) => {
      state.totalCount = action.payload.totalCount

      // console.log('UserShopInfoSlice: ', Object.entries(state))

      return state
    },

    resetUserShopInfo: (state) => {
      state.stepOneInfo = {
        userGender: 0,
        userName: '',
        userTel: '',
        userEmail: '',
        userCity: 0,
        userAdress: ''
      }

      state.stepTwoInfo = {
        id: 0,
        fast: false,
        title: '',
        description: '',
        cost: 0
      }

      state.stepThreeInfo = {
        userName: '',
        cardNumber: '',
        cardDeadLine: '',
        cardCvc: ''
      }

      state.totalCount = 0

      return state
    }


  }

})

export default UserShopInfoSlice.reducer
export const {
  stepOneInfoChange,
  stepTwoInfoChange,
  stepThreeInfoChange,
  totalCountChange,
  resetUserShopInfo } = UserShopInfoSlice.actions