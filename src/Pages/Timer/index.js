import React, { useState } from "react";

export default function Timer() {
  const [counter, setCounter] = useState(0);
  const [intervalId, setIntervalid] = useState(undefined);

  //   console.log("Re-rendered");
  function countUp() {
    return setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
  }
  function handleStart() {
    setIntervalid(countUp());
  }
  function handlePause() {
    clearInterval(intervalId);
  }

  //   function handleStart() {
  //     setInterval(() => {
  //       setCounter((prev) => prev + 1);
  //     }, 1000);
  //   }
  //   function handleDecrease() {
  //     setCounter((prev) => prev - 1);
  //   }

  return (
    <>
      <h1>Timer App</h1>
      <h1>{counter}</h1>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button>Reset</button>
      </div>
    </>
  );
}
