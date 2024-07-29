import { useReducer } from "react";
import {
  taskReducer,
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  TOGGLE_TASK,
} from "../reducers/taskReducer";

export const useTaskManager = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  const addTask = (text) => {
    dispatch({ type: ADD_TASK, payload: text });
  };

  const editTask = (id, text) => {
    dispatch({ type: EDIT_TASK, payload: { id, text } });
  };

  const deleteTask = (id) => {
    dispatch({ type: DELETE_TASK, payload: id });
  };

  const toggleTask = (id) => {
    dispatch({ type: TOGGLE_TASK, payload: id });
  };

  return { tasks, addTask, editTask, deleteTask, toggleTask };
};
