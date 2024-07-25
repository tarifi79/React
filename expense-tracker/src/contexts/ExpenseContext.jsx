import React, { createContext, useReducer, useContext } from "react";

const ExpenseContext = createContext();

const initialState = {
  expenses: [],
  baseCurrency: "CAD",
  budget: 6000,
};

function expenseReducer(state, action) {
  switch (action.type) {
    case "ADD_EXPENSE":
      return { ...state, expenses: [...state.expenses, action.payload] };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter((exp) => exp.id !== action.payload),
      };
    case "SET_BASE_CURRENCY_AND_BUDGET":
      return {
        ...state,
        baseCurrency: action.payload.currency,
        budget: action.payload.budget,
      };
    default:
      return state;
  }
}

export function ExpenseProvider({ children }) {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
}

export function useExpense() {
  return useContext(ExpenseContext);
}
