import { Trash2, Edit, Check } from "lucide-react";
import { Button } from "./button";

export default function ToDoList() {
  const dummyTasks = [
    { id: 1, text: "Task contoh 1", completed: false },
    { id: 2, text: "Task contoh 2", completed: true},
    { id: 3, text: "Task contoh 3", completed: false },
  ];

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
        />
        <Button className="border-none text-lg rounded-full outline-0 px-12 py-2 text-white bg-[#002765] dark:bg-blue-600 dark:hover:bg-blue-700">
          Add
        </Button>
      </div>
      <div className="max-h-48 overflow-y-auto">
        <ul className="custom-list relative list-none text-base px-3 pt-2 pb-12 select-none cursor-pointer text-[#002765] dark:text-white space-y-2">
          {dummyTasks.map((task) => (
            <li key={task.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <span
                  className={`w-7 h-7 rounded-full border-2 border-[#002765] dark:border-gray-500 flex items-center justify-center mr-3 ${
                    task.completed ? "bg-[#e0e7ff] dark:bg-blue-200" : ""
                  }`}
                >
                  {task.completed && "✓"}
                </span>
                {task.id === 2 ? ( 
                  <input
                    type="text"
                    value="Task contoh 2"
                    className="border-0 outline-0 bg-transparent focus:outline-none dark:text-white"
                    readOnly
                  />
                ) : (
                  <span className={task.completed ? "line-through" : ""}>
                    {task.text}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                {task.id === 2 ? (
                  <Check className="w-5 h-5 text-green-500 dark:text-green-400" />
                ) : (
                  <Edit className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                )}
                <Trash2 className="w-5 h-5 text-red-500 dark:text-red-400" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
