import {
  deleteTask,
  setTask,
  toggleTask,
  updateTask,
} from "../../actions/task";
import { loadTask, taskReducer } from "../../reducer/task";
import { useEffect, useReducer, useState } from "react";

import { Button } from "../shared/button";
import ToDoItem from "./ToDoItem";
import { fetchTasks, createTask, deleteTaskApi, updateTaskApi } from "../../api/taskApi";

export default function ToDoList() {
  const [task, dispatch] = useReducer(taskReducer, [], loadTask);
  const [newTask, setNewTask] = useState("");
  const [editTask, setEditTask] = useState("");
  const [editingTaskid, setEditingTaskId] = useState<number | string | null>(null); 
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null) 
  const [addingTask, setAddingTask] = useState(false);
  
  useEffect(() => {
    const getTasks = async () => {
      setLoading(true);
      try {
        const apiTasks = await fetchTasks();
        dispatch(setTask(apiTasks));
      } catch (error) {
        setError("Gagal mengambil data");
        console.error(error);
      }
      setLoading(false);
    }

    getTasks();
  }, []);

  const handleAddTask = async() => {
    if (newTask.trim() === "") return;

    setAddingTask(true)
    try {
      const newApiTask = await createTask(newTask);
      const newTaskWithCompleted = {
        ...newApiTask,
        completed: false
      }

      dispatch(setTask([...task, newTaskWithCompleted]));

      setNewTask("");
    } catch (error) {
      console.error(error);
    } finally {
      setAddingTask(false);
    }
  };

  const handleDeleteTask = async (id: number | string) => {
    try {
      await deleteTaskApi(id);
    dispatch(deleteTask(id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggleTask = (id: number | string) => {
    dispatch(toggleTask(id));
  };

  const startEditing = (id: number | string, text: string) => {
    setEditingTaskId(id);
    setEditTask(text);
  };

  const handleSaveEditing = async (id: number | string | string) => {
    if (editTask.trim() === "") return;
    try {
      await updateTaskApi(id, editTask);
      dispatch(updateTask(id, editTask));
      setEditingTaskId(null);
      setEditTask("");
    } catch (error) {
      setError("Gagal memperbarui tugas.");
      console.error(error);
    }
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
          disabled={addingTask}
        />
        <Button
          onClick={handleAddTask}
          className="border-none text-lg rounded-full outline-0 px-12 py-2 text-white bg-[#002765] dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          {addingTask ? "Adding..." : "Add"}
        </Button>
      </div>
      <div className="max-h-48 overflow-y-auto">
        <ul className="custom-list relative list-none text-base px-3 pt-2 pb-12 select-none cursor-pointer text-[#002765] dark:text-white space-y-2">
        {loading && <li className="text-gray-700">Memuat Task...</li>}
        {error && <li className="text-red-700">{error}</li>}
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
