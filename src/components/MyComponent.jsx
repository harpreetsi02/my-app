import React, { useState, useRef } from "react";
import Buttons from "./Button";

function MyComponent() {
  const [count, setCount] = useState(0);
  const previousCount = useRef(count);

  React.useEffect(() => {
    previousCount.current = count; // store kar liya purana value
  }, [count]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p>Current: {count}</p>
      <p>Previous: {previousCount.current}</p>
      {/* <button onClick={() => setCount(count + 1)}>Increase</button> */}
      <Buttons
        onclick={() => setCount(count + 1)}
        text={"Increase"}
      />
    </div>
  );
}

export default MyComponent