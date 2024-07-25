// components/CurrencyConverter.jsx

import React, { useState } from "react";
import { useCurrencyConverter } from "../hooks/useCurrencyConverter";
import { useExpense } from "../contexts/ExpenseContext";
import styles from "./CurrencyConverter.module.css";

function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("CAD");
  const [result, setResult] = useState(null);
  const { state } = useExpense();
  const { convert, loading, error } = useCurrencyConverter(state.baseCurrency);

  const handleConvert = (e) => {
    e.preventDefault();
    const convertedAmount = convert(
      parseFloat(amount),
      fromCurrency,
      toCurrency
    );
    if (convertedAmount !== null) {
      setResult(
        `${amount} ${fromCurrency} = ${convertedAmount.toFixed(
          2
        )} ${toCurrency}`
      );
    }
  };

  if (loading)
    return <div className={styles.loading}>Loading exchange rates...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.converter}>
      <h2>Currency Converter</h2>
      <form onSubmit={handleConvert} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="amount">Amount:</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="fromCurrency">From:</label>
          <select
            id="fromCurrency"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="CAD">CAD</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="toCurrency">To:</label>
          <select
            id="toCurrency"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="CAD">CAD</option>
          </select>
        </div>
        <button type="submit" className={styles.convertButton}>
          Convert
        </button>
      </form>
      {result && (
        <div className={styles.result}>
          <h3>Conversion Result:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default CurrencyConverter;
