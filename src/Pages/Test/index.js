import React, { useState, useEffect } from "react";

export default function Counting() {
  const [counter, setCounter] = useState(0);
  const [intervalid, setIntervalid] = useState(undefined);

  const handleCountup = () => {
    return setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
  };
  const handleCountdown = () => {
    return setInterval(() => {
      setCounter((prev) => prev - 1);
    }, 1000);
  };

  const handleStart = () => {
    if (intervalid) handlePause();
    setIntervalid(handleCountup());
  };
  const handlePast = () => {
    if (intervalid) handlePause();
    setIntervalid(handleCountdown());
  };

  const handlePause = () => {
    clearInterval(intervalid);
  };
  const handleReset = () => {
    clearInterval(intervalid);
    setCounter(0);
  };

  //   useEffect(() => {
  //     if (intervalid) clearInterval(intervalid);
  //   }, [intervalid]);
  return (
    <div>
      <h1>Counter App: {counter}</h1>
      <button onClick={handleStart}>Count Up</button>
      <button onClick={handlePast}>Count Down</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
