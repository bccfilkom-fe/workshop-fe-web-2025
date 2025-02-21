import { Action, Task } from "../actions/task";

export const taskReducer = (state: Task[], action: Action): Task[] => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "DELETE_TASK":
      return state.filter((task: Task) => task.id !== action.payload);
    case "TOGGLE_TASK":
      return state.map((task: Task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    case "UPDATE_TASK":
      return state.map((task: Task) =>
        task.id === action.payload.id
          ? { ...task, text: action.payload.newText } 
          : task
      );

    default:
      return state;
  }
};

export const loadTask = (): Task[] => {
  const saveTasks = localStorage.getItem("tasks");
  return saveTasks ? JSON.parse(saveTasks) : [];
};
