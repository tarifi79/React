import React from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useTaskManager } from "../hooks/useTaskManager";

const TaskManager = () => {
  const { tasks, addTask, editTask, deleteTask, toggleTask } = useTaskManager();

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        editTask={editTask}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    </div>
  );
};

export default TaskManager;
