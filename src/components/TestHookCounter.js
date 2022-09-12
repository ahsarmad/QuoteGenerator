import React, { useState } from "react";

const TestHookCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1> Testing Hook Counter: </h1>
      <h3>The number is now {count}</h3>
      <button onClick={() => setCount(count + 1)}> Add 1</button>
    </div>
  );
};

export default TestHookCounter;
