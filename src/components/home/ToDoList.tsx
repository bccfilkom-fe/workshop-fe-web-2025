import {
  addTask,
  deleteTask,
  toggleTask,
  updateTask,
} from "../../actions/task";
import { loadTask, taskReducer } from "../../reducer/task";
import { useEffect, useReducer, useState } from "react";

import { Button } from "../shared/button";
import ToDoItem from "./ToDoItem";

export default function ToDoList() {
  const [task, dispatch] = useReducer(taskReducer, [], loadTask);
  const [newTask, setNewTask] = useState("");
  const [editTask, setEditTask] = useState("");
  const [editingTaskid, setEditingTaskId] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    dispatch(addTask(newTask));
    setNewTask("");
  };
  const handleDeleteTask = (id: number) => {
    dispatch(deleteTask(id));
  };

  const handleToggleTask = (id: number) => {
    dispatch(toggleTask(id));
  };

  const startEditing = (id: number, text: string) => {
    setEditingTaskId(id);
    setEditTask(text);
  };

  const handleSaveEditing = (id: number) => {
    if (editTask.trim() === "") return;
    dispatch(updateTask(id, editTask));
    setEditingTaskId(null);
    setEditTask("");
  };

  return (
    <div className="w-full max-w-xl bg-white dark:bg-gray-900 mt-24 mb-5 pt-10 px-7 pb-16 mx-auto border rounded-2xl dark:border-gray-700">
      <h2 className="flex items-center mb-5 text-[#002765] dark:text-white text-2xl">
        To-Do List
      </h2>
      <div className="flex items-center justify-between bg-[#edeef0] dark:bg-gray-800 border rounded-full pl-5 mb-6 dark:border-gray-700">
        <input
          type="text"
          placeholder="Add text"
          className="flex flex-1 border-0 outline-0 bg-transparent border-[#002765] focus:outline-none dark:text-white dark:placeholder-gray-400"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
        />
        <Button
          onClick={handleAddTask}
          className="border-none text-lg rounded-full outline-0 px-12 py-2 text-white bg-[#002765] dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Add
        </Button>
      </div>
      <div className="max-h-48 overflow-y-auto">
        <ul className="custom-list relative list-none text-base px-3 pt-2 pb-12 select-none cursor-pointer text-[#002765] dark:text-white space-y-2">
          {task.map((task, idx) => (
            <ToDoItem
              key={idx * 101}
              task={task}
              editTask={editTask}
              setEditTask={setEditTask}
              editingTaskid={editingTaskid}
              startEditing={startEditing}
              handleDeleteTask={handleDeleteTask}
              handleSaveEditing={handleSaveEditing}
              handleToggleTask={handleToggleTask}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
