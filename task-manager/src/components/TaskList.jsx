import React from "react";

const TaskList = ({ tasks, editTask, deleteTask, toggleTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
            className="task-checkbox"
          />
          <span className={`task-text ${task.completed ? "completed" : ""}`}>
            {task.text}
          </span>
          <div className="task-buttons">
            <button
              onClick={() => editTask(task.id, prompt("Edit task:", task.text))}
              className="edit-button"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="delete-button"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
