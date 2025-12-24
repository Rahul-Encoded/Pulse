import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TradeState } from '../../interface/types'

const initialState: TradeState = {
  slippage: 20,
  priority: 0.001,
  bribe: 0.01,
}

export const tradeSlice = createSlice({
  name: 'trade',
  initialState,
  reducers: {
    setSlippage: (state, action: PayloadAction<number>) => {
      state.slippage = action.payload
    },
    setPriority: (state, action: PayloadAction<number>) => {
      state.priority = action.payload
    },
    setBribe: (state, action: PayloadAction<number>) => {
      state.bribe = action.payload
    },
  },
})

export const { setSlippage, setPriority, setBribe } = tradeSlice.actions

export default tradeSlice.reducer
