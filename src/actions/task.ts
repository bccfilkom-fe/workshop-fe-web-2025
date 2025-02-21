export type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export type Action =
  | { type: "ADD_TASK"; payload: string }
  | { type: "DELETE_TASK"; payload: number }
  | { type: "TOGGLE_TASK"; payload: number }
  | { type: "UPDATE_TASK"; payload: { id: number; newText: string } };

export const addTask = (text: string): Action => ({
  type: "ADD_TASK",
  payload: text,
});

export const deleteTask = (id: number): Action => ({
  type: "DELETE_TASK",
  payload: id,
});

export const toggleTask = (id: number): Action => ({
  type: "TOGGLE_TASK",
  payload: id,
});

export const updateTask = (id: number, newText: string): Action => ({
  type: "UPDATE_TASK",
  payload: {
    id,
    newText,
  },
});
