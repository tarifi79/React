// components/Dashboard.jsx

import React, { useState } from "react";
import { useExpense } from "../contexts/ExpenseContext";
import { useCurrencyConverter } from "../hooks/useCurrencyConverter";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import styles from "./Dashboard.module.css";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#82ca9d",
  "#a4de6c",
  "#d0ed57",
  "#ffc658",
  "#8dd1e1",
];

function Dashboard() {
  const { state } = useExpense();
  const [displayCurrency, setDisplayCurrency] = useState(state.baseCurrency);
  const { convert, loading, error } = useCurrencyConverter(state.baseCurrency);

  if (loading)
    return <div className={styles.loading}>Loading currency data...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  const totalExpenses = state.expenses.reduce((acc, exp) => {
    const amount = convert(exp.amount, exp.currency, displayCurrency);
    return acc + (amount || 0);
  }, 0);

  const budget =
    convert(state.budget, state.baseCurrency, displayCurrency) || 0;
  const remainingBudget = budget - totalExpenses;

  const expensesByCategory = state.expenses.reduce((acc, exp) => {
    const amount = convert(exp.amount, exp.currency, displayCurrency) || 0;
    acc[exp.category] = (acc[exp.category] || 0) + amount;
    return acc;
  }, {});

  const pieData = Object.entries(expensesByCategory).map(
    ([category, amount]) => ({
      name: category,
      value: Number(amount.toFixed(2)),
    })
  );

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.tooltip}>
          <p>{`${payload[0].name} : ${payload[0].value.toFixed(
            2
          )} ${displayCurrency}`}</p>
          <p>{`${((payload[0].value / totalExpenses) * 100).toFixed(
            2
          )}% of total`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <div className={styles.currencySelector}>
        <label htmlFor="currency-select">Display Currency: </label>
        <select
          id="currency-select"
          value={displayCurrency}
          onChange={(e) => setDisplayCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="CAD">CAD</option>
        </select>
      </div>
      <div className={styles.summary}>
        <div className={styles.summaryItem}>
          <h3>Total Budget</h3>
          <p>
            {budget.toFixed(2)} {displayCurrency}
          </p>
        </div>
        <div className={styles.summaryItem}>
          <h3>Total Expenses</h3>
          <p>
            {totalExpenses.toFixed(2)} {displayCurrency}
          </p>
        </div>
        <div className={styles.summaryItem}>
          <h3>Remaining Budget</h3>
          <p
            className={remainingBudget >= 0 ? styles.positive : styles.negative}
          >
            {remainingBudget.toFixed(2)} {displayCurrency}
          </p>
        </div>
      </div>

      <h3>Expense Breakdown</h3>
      <div className={styles.chart}>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(2)}%`
              }
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Dashboard;
