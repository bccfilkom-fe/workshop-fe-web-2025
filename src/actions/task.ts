export type Task = {
  id: number | string;
  text: string;
  completed: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export type Action =
  | { type: "ADD_TASK"; payload: string }
  | { type: "DELETE_TASK"; payload: number | string }
  | { type: "TOGGLE_TASK"; payload: number | string }
  | { type: "UPDATE_TASK"; payload: { id: number | string; newText: string } }
  | { type: "SET_TASK"; payload: Task[] };


export const addTask = (text: string): Action => ({
  type: "ADD_TASK",
  payload: text,
});

export const deleteTask = (id: number | string): Action => ({
  type: "DELETE_TASK",
  payload: id,
});

export const toggleTask = (id: number | string): Action => ({
  type: "TOGGLE_TASK",
  payload: id,
});

export const updateTask = (id: number | string, newText: string): Action => ({
  type: "UPDATE_TASK",
  payload: {
    id,
    newText,
  },
});

export const setTask = (tasks: Task[]): Action => ({
  type: "SET_TASK",
  payload: tasks
})
