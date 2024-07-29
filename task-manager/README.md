# Task Manager

This Task Management Application is a simple, user-friendly web app built with React and Vite. It allows users to create, edit, delete, and mark tasks as complete. The application uses React's useState and useReducer hooks for state management and custom CSS for styling.

## Features

- Add new tasks
- Edit existing tasks
- Mark tasks as complete or active
- Delete tasks
- Clean and responsive user interface

## Technologies Used

- React
- Vite
- CSS

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/tarifi79/React.git
   cd task-manager
   ```

2. Install depandencies:

   ```sh
   npm install
   # or
   yarn install
   ```

3. Run the app
   Start your development server!

   ```sh
   npm run dev
   # or
   yarn dev

   ```

## Usage

- Adding a Task: Type your task in the input field and click "Add Task" or press Enter.
- Editing a Task:Click the "Edit" button next to a task, enter the new task text in the prompt, and click OK.
- Deleting a Task: Click the "Delete" button next to a task to remove it.
- Completing a Task: Click the checkbox next to a task to mark it as complete or incomplete.

## Project Structure

    ```plaintext
    task-manager/

│
├── public/
│ └── vite.svg
│
├── src/
│ ├── components/
│ │ ├── TaskManager.jsx
│ │ ├── TaskForm.jsx
│ │ └── TaskList.jsx
│ │
│ ├── hooks/
│ │ └── useTaskManager.js
│ │
│ ├── reducers/
│ │ └── taskReducer.js
│ │
│ ├── styles/
│ │ └── TaskManager.css
│ │
│ ├── App.jsx
│ └── main.jsx
│
├── index.html
├── package.json
├── README.md
└── vite.config.js

    ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
