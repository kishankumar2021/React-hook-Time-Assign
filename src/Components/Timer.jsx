import React, { useState, useEffect } from "react";

function Counter() {
  const [counter, setCounter] = useState(10);
  const [count, setCount] = useState(20);

  useEffect(() => {
    console.log("Inside counter effect");
  }, [counter]);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((preval) => {
        if (preval === counter) {
          clearInterval(id);
          return counter;
        }
        return preval - 1;
      });
    }, 1000);
  }, []);


  return (
    <div>
          <h2 className="timer">End Time {counter} : start time {count}{" "}</h2>

      <h1 className="cnter">Count is : {count}</h1>
    
    </div>
  );
}

export default Counter;