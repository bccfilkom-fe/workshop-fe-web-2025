import ToDoList from "../components/home/ToDoList";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-white dark:bg-gray-700">
      <ToDoList />
    </div>
  );
}
