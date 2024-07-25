import React, { useState } from "react";
import { useExpense } from "../contexts/ExpenseContext";
import { useCurrencyConverter } from "../hooks/useCurrencyConverter";
import styles from "./AddExpense.module.css";

const categories = [
  "Food & Dining",
  "Housing",
  "Transportation",
  "Utilities",
  "Healthcare",
  "Entertainment",
  "Shopping",
  "Personal Care",
  "Education",
  "Travel",
];

function AddExpense() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState("CAD");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const { state, dispatch } = useExpense();
  const { convert } = useCurrencyConverter(state.baseCurrency);

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = quantity * parseFloat(price);
    const convertedAmount = convert(amount, currency, state.baseCurrency);
    dispatch({
      type: "ADD_EXPENSE",
      payload: {
        id: Date.now(),
        description,
        quantity,
        price: parseFloat(price),
        amount: convertedAmount,
        currency,
        category,
        date,
      },
    });
    setDescription("");
    setQuantity(1);
    setPrice("");
    setCurrency("CAD");
    setCategory("");
    setDate(new Date().toISOString().split("T")[0]);
  };

  return (
    <div className={styles.addExpense}>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description:</label>
          <input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="quantity">Quantity:</label>
          <input
            id="quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            min="1"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="price">Price:</label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            step="0.01"
            required
          />
        </div>
        <p className={styles.subtotal}>
          Subtotal: {(quantity * parseFloat(price || 0)).toFixed(2)}
        </p>
        <div className={styles.formGroup}>
          <label htmlFor="currency">Currency:</label>
          <select
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="CAD">CAD</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="date">Date:</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default AddExpense;
