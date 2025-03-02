import { Check, Edit, Trash2 } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

import { Task } from "../../actions/task";

interface ITodoItem {
  task: Task;
  editTask: string;
  handleToggleTask: (id: number | string) => void;
  setEditTask: Dispatch<SetStateAction<string>>;
  editingTaskid: number | string | null;
  handleSaveEditing: (id: number | string) => void;
  startEditing: (id: number | string, text: string) => void;
  handleDeleteTask: (id: number | string) => void;
}

const ToDoItem = ({
  task,
  handleToggleTask,
  editTask,
  setEditTask,
  editingTaskid,
  handleSaveEditing,
  startEditing,
  handleDeleteTask,
}: ITodoItem) => {
  return (
    <li key={task.id} className="flex items-center justify-between">
      <div className="flex items-center">
        <span
          className={`w-7 h-7 rounded-full border-2 border-[#002765] dark:border-gray-500 flex items-center justify-center mr-3 ${
            task.completed ? "bg-[#e0e7ff] dark:bg-blue-200" : ""
          }`}
          onClick={() => handleToggleTask(task.id)}
        >
          {task.completed && "✓"}
        </span>
        {task.id === editingTaskid ? (
          <input
            title="edit"
            type="text"
            value={editTask}
            onChange={(e) => setEditTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSaveEditing(task.id)}
            className="border-0 outline-0 bg-transparent focus:outline-none dark:text-white"
          />
        ) : (
          <span
            className={`text-xl md:text-8xl ${
              task.completed ? "line-through" : ""
            }`}
            onClick={() => handleToggleTask(task.id)}
          >
            {task.text}
          </span>
        )}
      </div>
      <div className="flex items-center gap-2">
        {task.id === editingTaskid ? (
          <Check
            className="w-5 h-5 text-green-500 dark:text-green-400"
            onClick={() => handleSaveEditing(task.id)}
          />
        ) : (
          <Edit
            className="w-5 h-5 text-blue-500 dark:text-blue-400"
            onClick={() => startEditing(task.id, task.text)}
          />
        )}
        <Trash2
          className="w-5 h-5 text-red-500 dark:text-red-400"
          onClick={() => handleDeleteTask(task.id)}
        />
      </div>
    </li>
  );
};

export default ToDoItem;
