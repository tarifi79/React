# Expense Tracker

Expense Tracker is a React-based web application that allows users to manage their expenses across multiple currencies. It provides features such as adding expenses, viewing expense breakdowns, and currency conversion.

## Features

- Add and delete expenses
- Categorize expenses
- Multi-currency support
- Real-time currency conversion
- Visual representation of expenses with charts
- Responsive design for mobile and desktop

## Technologies Used

- React
- Vite
- React Router
- Recharts for data visualization
- CSS Modules for styling
- Axios for API requests

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

1. Clone the repository:

   ```bash
    git clone https://github.com/tarifi79/React.git

   ```

2. Navigate to the project directory

   ```bash
   cd expense-tracker
   ```

3. Install dependencies
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add your currency API key:

   ```js
   VITE_CURRENCY_API_KEY = your - api - key;
   ```

5. Run the app

   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

The built files will be in the `dist` directory.

## Usage

1. Set your base currency on the home page.
2. Add expenses using the "Add Expense" page.
3. View your expense breakdown and budget status on the Dashboard.
4. Use the Currency Converter for quick conversions.
5. View and manage your expenses in the Expense List.

## Project Structure

- `src/components/`: React components
- `src/contexts/`: React context for global state management
- `src/hooks/`: Custom React hooks
- `src/App.jsx`: Main application component
- `src/main.jsx`: Application entry point

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgements

- [ExchangeRate-API](https://www.exchangerate-api.com/) for providing currency conversion rates
- [Recharts](https://recharts.org/) for the charting library
- [React Router](https://reactrouter.com/) for routing
