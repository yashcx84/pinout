import { useState } from "react";
let APP = () => {
    const [Task, settask] = useState("");
    const [Description, setdescrip] = useState("");
    const [maintask, setmaintask] = useState([]);
    const submithandler = (e) => {
      // prevent from the auto reloding or submission.
      e.preventDefault()
      setmaintask([...maintask, {Task, Description}])
      settask("")
      setdescrip("")
    }
    const deletehandler = (i) => {
          let copytask = [...maintask]
          copytask.splice(i, 1)
          setmaintask(copytask);
    }
    let renderedtask = <h2 className="text-gray-300 select-none text-center bg-gray-100 rounded-md p-2 w-32 m-auto">TASK_C :: 0</h2>;
    if(maintask.length>0){
     renderedtask = maintask.map((t,i) => {
          return (
              <div className="m-auto rounded-lg mb-4 w-full flex justify-between align-middle p-2 shadow-md border-2">
                  <div className="flex flex-col justify-start align-middle">
                  <h3 className="px-2 py-1 text-black font-bold rounded-md tracking-widest text-md">{t.Task}</h3>
                  <h4 className="px-2 py-1 text-slate-500 rounded-md tracking-wider text-sm">{t.Description}</h4>
                  <button className="bg-red-100 border-2 transition-all duration-200 border-transparent shadow-sm hover:bg-white hover:border-2 hover:border-slate-200 text-red-500 rounded-lg p-2 w-32 mt-6 m-2 tracking-wider text-sm" onClick={() =>
                  {
                      deletehandler(i)
                    }}>REMOVE </button>
                  </div>
              </div>
            //   ----
          )
      })
    }
   
    return (
        <>
        <div className="pb-8 border-b-2 fixed top-0 w-full backdrop-blur-md">
        <h1 className="m-auto w-full bg-black flex justify-center align-middle text-white text-center text-2xl font-mono tracking-wider p-4">
          pinout<span className="text-red-300">.me</span>
        </h1>
        </div>
        <div className="h-full flex flex-col justify-center align-middle mt-16">
        <form onSubmit={submithandler} className="m-auto my-10 w-96 flex flex-col justify-center align-middle gap-8">
        <div className="select-none m-auto w-full text-center font-bold tracking-wide p-6 text-3xl">
            Stand<span className="text-red-300">&</span>Pin
          </div>
          <input
            type="text"
            placeholder="MX(8)"
            className="p-6 rounded-md tracking-widest border-2 border-gray-200" 
            value={Task}
            onChange={(e) => {
              settask(e.target.value);
            }}
          ></input>
          <input
            type="text"
            placeholder="MX(14)"
            className="p-6 rounded-md tracking-widest border-2 border-gray-200"
            value={Description}
            onChange={(e) => {
              setdescrip(e.target.value);
            }}
          ></input>
          <button className=" m-auto bg-black text-white rounded-t-lg pt-5 pb-0 px-0 select-none w-48" value={Task} onClick={
              (e) => {
                    if(e.target.value === ""){
                    return (
                       <h1>error</h1>
                    )
                    }
            }
          }>F E E D<hr className="mt-5 mb-0  border-2 border-red-300"/></button>
        </form>
      </div>
      <div className="m-auto w-96 p-1 rounded-md">
            {renderedtask}
        </div>
        <div className="select-none w-full text-center fixed bottom-0 text-xs tracking-wide text-gray-400">
            Dummy Rights Reserved by@yashcx84
        </div>
      </>
    );
  };
  export default APP;