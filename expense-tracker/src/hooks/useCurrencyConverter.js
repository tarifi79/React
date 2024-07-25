// hooks/useCurrencyConverter.js

import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_CURRENCY_API_KEY;
const BASE_URL = "https://v6.exchangerate-api.com/v6";

export function useCurrencyConverter(baseCurrency) {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRates() {
      try {
        setLoading(true);
        const response = await axios.get(
          `${BASE_URL}/${API_KEY}/latest/${baseCurrency}`
        );
        setRates(response.data.conversion_rates);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch exchange rates");
        setLoading(false);
      }
    }
    fetchRates();
  }, [baseCurrency]);

  function convert(amount, from, to) {
    if (!rates[from] || !rates[to]) return null;
    return (amount / rates[from]) * rates[to];
  }

  return { convert, loading, error };
}
