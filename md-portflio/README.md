# My React App

This is a React application that features a navigation bar with a moving underline on hover, a contact form that uses EmailJS to send emails, and a dark mode/light mode toggle feature.

## Features

- **React Router** for navigation
- **EmailJS** for sending emails from the contact form
- **Moving Underline on Hover** for navigation links
- **Toast Notifications** for form submission feedback using `react-toastify`

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- Node.js (v12.x or higher)
- npm (v6.x or higher) or yarn (v1.x or higher)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/tarifi79/React.git
   cd md-portfolio
   ```

2. Install depandencies:

   ```sh
   npm install
   # or
   yarn install
   ```

3. Create a .env file in the root directory of the project and add your EmailJS environment variables:

   ```js
   VITE_EMAILJS_USER_ID = your_public_key;
   VITE_EMAILJS_SERVICE_ID = your_emailjs_service_id;
   VITE_EMAILJS_TEMPLATE_ID = your_emailjs_template_id;
   ```

4. Run the app
   Start your development server!

   ```sh
   npm run dev
   # or
   yarn dev

   ```

## Project Structure

    ```plaintext
    md-portfolio
    ├── components/
    │   ├── Footer.jsx
    │   ├── Footer.module.css
    │   ├── NavBar.jsx
    │   ├── NavBar.module.css
    │   ├── Spinner.jsx
    │   ├── Spinner.module.css
    ├── pages/
    │   ├── About.jsx
    │   ├── About.module.css
    │   ├── Contact.jsx
    │   ├── Contact.module.css
    │   ├── Home.jsx
    │   ├── Home.module.css
    │   ├── Projects.jsx
    │   ├── Projects.module.css
    │   ├── Skills.jsx
    │   ├── Skills.module.css
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── .env
    ├── .eslintrc.cjs
    ├── .gitignore
    ├── index.html
    ├── package-lock.json
    ├── package.json
    └── README.md
    ```

### Summary

This README file provides a comprehensive guide to your React application, including installation instructions, usage details, and information about the various features. If you need any further customization or additional sections, feel free to ask!
