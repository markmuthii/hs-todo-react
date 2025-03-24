import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  // let count = 0;

  const tasks = [
    {
      task: "Go to the movies",
      status: "complete",
    },
    {
      task: "Buy groceries",
      status: "pending",
    },
    {
      task: "Go to sleep",
      status: "pending",
    },
  ];

  const pendingTasks = tasks.filter((todo) => todo.status === "pending");
  const completeTasks = tasks.filter((todo) => todo.status === "complete");

  const handleFormSubmission = (e) => {
    e.preventDefault();

    console.log(e.target[0].value);

    // console.log("Form Submitted");
  };

  return (
    <main className="flex h-screen justify-center items-center">
      <div className="p-12 rounded shadow-2xl w-2/5 max-w-7xl space-y-8">
        <button
          onClick={() => {
            setCount(count + 1);
            console.log("Button clicked");

            // count = count + 1;

            console.log({ count });
          }}
        >
          Count is {count}
        </button>
        <h1 className="text-3xl text-center font-bold">Task Master</h1>

        <form className="space-y-2" onSubmit={handleFormSubmission}>
          <input
            name="task"
            type="text"
            className="border p-2 rounded w-full"
            placeholder="Enter task"
          />

          <button
            className={`bg-green-700 p-2 rounded text-white w-full cursor-pointer duration-300 hover:bg-green-600`}
            type="submit"
          >
            Add Task
          </button>
        </form>

        <div className="tasks">
          <h2 className="text-xl text-center mb-2">Pending Tasks</h2>
          <ol className="list-decimal space-y-1">
            {pendingTasks.map((todo, i) => {
              return (
                <li key={i} className="flex justify-between ">
                  {i + 1}. {todo.task}{" "}
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

          <hr className="my-4" />
          <h2 className="text-xl text-center mb-2">Complete Tasks</h2>
          <ol className="list-decimal pl-4">
            {completeTasks.map((todo, i) => {
              return <li key={i}>{todo.task}</li>;
            })}
          </ol>
        </div>
      </div>
    </main>
  );
};

export { App };
