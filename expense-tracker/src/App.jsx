import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { ExpenseProvider } from "./contexts/ExpenseContext";
import Dashboard from "./components/Dashboard";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import CurrencyConverter from "./components/CurrencyConverter";
import Home from "./components/Home";
import styles from "./App.module.css";
import "./global.css";

function App() {
  return (
    <Router>
      <ExpenseProvider>
        <div className={styles.app}>
          <nav className={styles.nav}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/add">Add Expense</Link>
              </li>
              <li>
                <Link to="/list">Expense List</Link>
              </li>
              <li>
                <Link to="/convert">Currency Converter</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add" element={<AddExpense />} />
            <Route path="/list" element={<ExpenseList />} />
            <Route path="/convert" element={<CurrencyConverter />} />
          </Routes>
        </div>
      </ExpenseProvider>
    </Router>
  );
}

export default App;
