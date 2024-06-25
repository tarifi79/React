import { useState } from "react";

import "./App.css";

const initialTasks = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Build a To-Do List App", completed: true },
  { id: 3, text: "Master JavaScript", completed: false },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(task) {
    setTasks([...tasks, task]);
  }

  const handleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => id !== task.id));
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <AddTask onAddTask={handleAddTask} />
      <TasksList
        tasks={tasks}
        onComplete={handleComplete}
        onDelete={handleDelete}
      />
    </div>
  );
}

function TasksList({ tasks, onComplete, onDelete }) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
}

function Task({ task, onComplete, onDelete }) {
  return (
    <li>
      <span
        className={task.completed ? "completed" : ""}
        onClick={() => onComplete(task.id)}
      >
        {task.text}
      </span>
      <button onClick={() => onDelete(task.id)}>Delete!</button>
    </li>
  );
}

function AddTask({ onAddTask }) {
  const [taskContent, setTaskContent] = useState("");

  function handleAddTask(e) {
    e.preventDefault();
    if (!taskContent) return;

    let newTask = {
      id: Math.round(Math.random() * 100000),
      text: taskContent,
      completed: false,
    };

    onAddTask(newTask);
    setTaskContent(""); // Clear the input field after adding the task
  }

  return (
    <form onSubmit={handleAddTask}>
      <input
        type="text"
        value={taskContent}
        onChange={(e) => setTaskContent(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default App;
