import { useState } from "react";

// Main App component
const App = () => {
  // State to manage the count value
  const [count, setCount] = useState(0);

  // Array of tasks with their statuses
  const tasks = [
    {
      task: "Go to the movies",
      status: "complete", // Task is completed
    },
    {
      task: "Buy groceries",
      status: "pending", // Task is still pending
    },
    {
      task: "Go to sleep",
      status: "pending", // Task is still pending
    },
  ];

  // Filter tasks to get only the pending ones
  const pendingTasks = tasks.filter((todo) => todo.status === "pending");

  // Filter tasks to get only the completed ones
  const completeTasks = tasks.filter((todo) => todo.status === "complete");

  // Function to handle form submission
  const handleFormSubmission = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    console.log(e.target[0].value); // Logs the value of the input field
  };

  return (
    <main className="flex h-screen justify-center items-center">
      {/* Main container for the app */}
      <div className="p-12 rounded shadow-2xl w-2/5 max-w-7xl space-y-8">
        {/* Button to increment the count */}
        <button
          onClick={() => {
            setCount(count + 1); // Increment the count state
            console.log("Button clicked"); // Log button click
            console.log({ count }); // Log the current count value
          }}
        >
          Count is {count} {/* Display the current count */}
        </button>

        {/* App title */}
        <h1 className="text-3xl text-center font-bold">Task Master</h1>

        {/* Form to add a new task */}
        <form className="space-y-2" onSubmit={handleFormSubmission}>
          {/* Input field for entering a task */}
          <input
            name="task"
            type="text"
            className="border p-2 rounded w-full"
            placeholder="Enter task"
          />

          {/* Submit button for the form */}
          <button
            className={`bg-green-700 p-2 rounded text-white w-full cursor-pointer duration-300 hover:bg-green-600`}
            type="submit"
          >
            Add Task
          </button>
        </form>

        {/* Section to display tasks */}
        <div className="tasks">
          {/* Pending tasks section */}
          <h2 className="text-xl text-center mb-2">Pending Tasks</h2>
          <ol className="list-decimal space-y-1">
            {/* Map over the pending tasks and render them in a list */}
            {pendingTasks.map((todo, i) => {
              return (
                <li key={i} className="flex justify-between ">
                  {/* Display task number and name */}
                  {i + 1}. {todo.task} {/* Button to mark task as complete */}
                  <button className="cursor-pointer text-xs border border-green-500 px-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-3 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </button>
                </li>
              );
            })}
          </ol>

          {/* Divider between pending and completed tasks */}
          <hr className="my-4" />

          {/* Completed tasks section */}
          <h2 className="text-xl text-center mb-2">Complete Tasks</h2>
          <ol className="list-decimal pl-4">
            {/* Map over the complete tasks and render them in a list */}
            {completeTasks.map((todo, i) => {
              return (
                // Display completed task
                <li key={i}>{todo.task}</li>
              );
            })}
          </ol>
        </div>
      </div>
    </main>
  );
};

// Export the App component
export { App };
