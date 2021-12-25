import { createSlice } from '@reduxjs/toolkit'

export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = CATEGORIES.map(category => ({ category: category, amount: 0 }))

const budgetsSlice = createSlice({
  name: 'budgets',
  initialState: initialState,
  reducers: {
    editBudget: (state, action) => {
      const budget = state.find(budget => budget.category === action.payload.category)
      if(budget){
        budget.amount = action.payload.amount
      }
    }
  }
})

export const { editBudget } = budgetsSlice.actions
export const selectBudgets = (state) => state.budgets;
export default budgetsSlice.reducer;
