// components/ExpenseList.jsx

import React, { useState } from "react";
import { useExpense } from "../contexts/ExpenseContext";
import { useCurrencyConverter } from "../hooks/useCurrencyConverter";
import styles from "./ExpenseList.module.css";

function ExpenseList() {
  const { state, dispatch } = useExpense();
  const [displayCurrency, setDisplayCurrency] = useState(state.baseCurrency);
  const { convert, loading, error } = useCurrencyConverter(state.baseCurrency);

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_EXPENSE", payload: id });
  };

  if (loading)
    return <div className={styles.loading}>Loading currency data...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  const safeConvert = (amount, fromCurrency, toCurrency) => {
    if (fromCurrency === toCurrency) return amount.toFixed(2);
    const converted = convert(amount, fromCurrency, toCurrency);
    return converted !== null ? converted.toFixed(2) : "N/A";
  };

  return (
    <div className={styles.expenseList}>
      <h2>Expense List</h2>
      <div className={styles.currencySelector}>
        <label htmlFor="display-currency">Display Currency: </label>
        <select
          id="display-currency"
          value={displayCurrency}
          onChange={(e) => setDisplayCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="CAD">CAD</option>
        </select>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Price per Unit</th>
              <th>Original Amount</th>
              <th>Base Currency Amount ({state.baseCurrency})</th>
              <th>Display Currency Amount ({displayCurrency})</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {state.expenses.map((expense) => {
              const originalAmount = expense.quantity * expense.price;

              return (
                <tr key={expense.id}>
                  <td>{new Date(expense.date).toLocaleDateString()}</td>
                  <td>{expense.description}</td>
                  <td>{expense.category}</td>
                  <td>{expense.quantity}</td>
                  <td>
                    {expense.price.toFixed(2)} {expense.currency}
                  </td>
                  <td>
                    {originalAmount.toFixed(2)} {expense.currency}
                  </td>
                  <td>
                    {safeConvert(
                      originalAmount,
                      expense.currency,
                      state.baseCurrency
                    )}{" "}
                    {state.baseCurrency}
                  </td>
                  <td>
                    {safeConvert(
                      originalAmount,
                      expense.currency,
                      displayCurrency
                    )}{" "}
                    {displayCurrency}
                  </td>
                  <td>
                    <button
                      className={styles.deleteButton}
                      onClick={() => handleDelete(expense.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExpenseList;
