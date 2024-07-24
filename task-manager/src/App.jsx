import { useReducer, useState } from "react";
import "./App.css";

const initialState = {
  tasks: [],
  filter: "all",
};

function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Date.now(), text: action.payload, completed: false },
        ],
      };
    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    case "CLEAR_COMPLETED":
      return { ...state, tasks: state.tasks.filter((task) => !task.completed) };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [newTask, setNewTask] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      dispatch({ type: "ADD_TASK", payload: newTask });
      setNewTask("");
    }
  };

  const activeTasks = state.tasks.filter((task) => !task.completed);
  const completedTasks = state.tasks.filter((task) => task.completed);

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add Task</button>
      </form>
      <div className="task-lists">
        <div className="task-list">
          <h2>Active Tasks</h2>
          <ul>
            {activeTasks.map((task) => (
              <li key={task.id}>
                <span
                  onClick={() =>
                    dispatch({ type: "TOGGLE_TASK", payload: task.id })
                  }
                >
                  {task.text}
                </span>
                <button
                  onClick={() =>
                    dispatch({ type: "DELETE_TASK", payload: task.id })
                  }
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="task-list">
          <h2>Completed Tasks</h2>
          <ul>
            {completedTasks.map((task) => (
              <li key={task.id} className="completed">
                <span
                  onClick={() =>
                    dispatch({ type: "TOGGLE_TASK", payload: task.id })
                  }
                >
                  {task.text}
                </span>
                <button
                  onClick={() =>
                    dispatch({ type: "DELETE_TASK", payload: task.id })
                  }
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button
        className="clear-completed"
        onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
      >
        Clear Completed
      </button>
    </div>
  );
}

export default App;
