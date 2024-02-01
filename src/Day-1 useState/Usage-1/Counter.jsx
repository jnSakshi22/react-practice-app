import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(1);

  const handleClick = () => {
    setCounter(counter + 1);

    console.log("Counter: ", counter);
  };
  return (
    <div>
      <h3>Example 1: Counter(number)</h3>
      <p>counter: {counter}</p>
      <button
        onClick={handleClick}
        // onClick={() => {
        //   setCounter(counter + 1);
        // }}
      >
        Click Me
      </button>
    </div>
  );
};

export default Counter;
