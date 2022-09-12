import React, { useState, useEffect } from "react";

const UpdateTitle = () => {
  const [count, setCount] = useState(0);

  // useEffect
  useEffect(() => {
    document.title = "Clicked ${count} times";
  }, [count]);

  return (
    <>
      <div>UpdateTitle</div>
      <button onClick={() => setCount(count + 1)}> Increment</button>
    </>
  );
};

export default UpdateTitle;
