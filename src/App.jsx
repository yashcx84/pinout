import { useState } from "react";
let APP = () => {
  const [Task, settask] = useState("");
  const [Description, setdescrip] = useState("");
  const [maintask, setmaintask] = useState([]);
  const [error, setError] = useState("");
  const submithandler = (e) => {
    // prevent from the auto reloding or submission.
    e.preventDefault();
    if (!Task) {
      setError("Title Required");
      return;
    }
    setmaintask([...maintask, { Task, Description, completed: false }]);
    settask("");
    setdescrip("");
    setError("");
  };
  const handleComplete = (index) => {
    const updatedTasks = maintask.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setmaintask(updatedTasks);
  };
  const deletehandler = (i) => {
    let copytask = [...maintask];
    copytask.splice(i, 1);
    setmaintask(copytask);
  };
  let renderedtask;
  if (maintask.length === 0) {
    renderedtask = (
      <h2 className="text-black select-none text-center bg-gray-100 rounded-md p-2 w-32 m-auto">
        Task Count: 0
      </h2>
    );
  } else {
    renderedtask = maintask.map((t, i) => {
      return (
        <div className="m-auto rounded-lg mb-4 w-[100%] border-gray-300 flex flex-wrap justify-between align-middle gap-4 p-8 shadow-xl shadow-black-200 border-[1px]">
          <div className="result-content">
            <h1
              className={`py-1 text-black font-bold rounded-md -tracking-normal text-2xl capitalize ${
                t.completed ? "line-through" : "none"
              }`}
            >
              {t.Task}
            </h1>
            <h2
              className={`py-1 text-slate-500 rounded-md text-md capitalize ${
                t.completed ? "line-through" : "none"
              }`}
            >
              {t.Description}
            </h2>
          </div>
          <div className="button-container flex justify-center align-middle">
            <button
              onClick={() => handleComplete(i)}
              className={`border-2 transition-all duration-200 border-transparent shadow-sm hover:border-2 hover:border-slate-200 text-black font-bold bg-[#7fff4d] rounded-tl-md rounded-bl-md p-2 w-32 h-min tracking-wider text-sm`}
            >
              {t.completed ? "Undo" : "Completed"}
            </button>
            <button
              className="border-2 transition-all duration-200 border-transparent shadow-sm hover:border-2 hover:border-slate-200 hover:text-black text-white bg-red-600 rounded-tr-md rounded-br-md p-2 w-32 h-min tracking-wider text-sm"
              onClick={() => {
                deletehandler(i);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      );
    });
  }

  return (
    <>
      <div className="navigation pb-4 border-b-[1px] fixed top-0 w-full backdrop-blur-md">
        <h2 className="m-auto w-full bg-black flex justify-center align-middle text-white text-center text-2xl p-4">
          <span className="font-bold">.</span>PINOUT
        </h2>
      </div>
      <div className="h-full w-full flex flex-col justify-center gap-4 align-middle mt-16">
        <h1 className="select-none m-auto w-full text-center font-bold p-6 mt-6">
          Get Your Tasks <span>Done </span>Today!
        </h1>
        <form onSubmit={submithandler} className="w-full flex flex-col gap-4">
          {error && (
            <p className="text-red-500 w-full text-center font-semibold">
              {error}
            </p>
          )}
          <div className="inputs flex flex-col justify-center align-middle gap-4 w-full my-2">
            <input
              type="text"
              placeholder="Title Here"
              className="p-6 rounded-md border-2 border-gray-200"
              value={Task}
              onChange={(e) => {
                settask(e.target.value);
              }}
            ></input>
            <input
              type="text"
              placeholder="Description Here"
              className="p-6 rounded-md border-2 border-gray-200"
              value={Description}
              onChange={(e) => {
                setdescrip(e.target.value);
              }}
            ></input>
          </div>
          <button
            className="tracking-wider m-auto bg-black text-white rounded-t-lg pt-3 pb-0 px-0 select-none w-48"
            value={Task}
            onClick={submithandler}
          >
            🧩 FEED
            <hr className="mt-3 mb-0 border-2" />
          </button>
        </form>
      </div>
      <div className="result-container m-auto w-[70%] p-1 rounded-md mt-8 mb-12">
        {renderedtask}
      </div>
      <div className="select-none w-full text-center fixed bottom-0 text-xs tracking-wide bg-white backdrop:blur-xl text-black opacity-70">
        @yashcx84
      </div>
    </>
  );
};
export default APP;
