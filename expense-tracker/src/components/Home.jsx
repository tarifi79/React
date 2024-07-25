// components/Home.jsx

import React from "react";
import { useExpense } from "../contexts/ExpenseContext";
import { useCurrencyConverter } from "../hooks/useCurrencyConverter";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  const { state, dispatch } = useExpense();
  const navigate = useNavigate();
  const { convert, loading, error } = useCurrencyConverter("CAD"); // We use CAD as the base for initial conversion

  const handleSetBaseCurrency = (currency) => {
    if (loading) return;

    let newBudget = 6000; // Default CAD budget
    if (currency !== "CAD") {
      const converted = convert(6000, "CAD", currency);
      newBudget = converted !== null ? Math.round(converted) : 6000;
    }

    dispatch({
      type: "SET_BASE_CURRENCY_AND_BUDGET",
      payload: { currency, budget: newBudget },
    });
    navigate("/dashboard");
  };

  if (loading)
    return <div className={styles.loading}>Loading currency data...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.home}>
      <h1>Welcome to Expense Tracker</h1>
      <p>Your current base currency is: {state.baseCurrency}</p>
      <p>Select your base currency to get started:</p>
      <div className={styles.currencyButtons}>
        <button onClick={() => handleSetBaseCurrency("USD")}>USD</button>
        <button onClick={() => handleSetBaseCurrency("EUR")}>EUR</button>
        <button onClick={() => handleSetBaseCurrency("GBP")}>GBP</button>
        <button onClick={() => handleSetBaseCurrency("CAD")}>CAD</button>
      </div>
    </div>
  );
}

export default Home;
