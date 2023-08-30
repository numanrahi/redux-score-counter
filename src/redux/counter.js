import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  score: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.score += 1
    },
    decrement: (state) => {
      state.score -= 1
    },
    incrementByAmount: (state, action) => {
      state.score += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer