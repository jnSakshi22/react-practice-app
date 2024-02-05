import { useState } from "react";

const ReplacingItemsInArray = () => {
  const [counter, setCounter] = useState([0, 0, 0]);

  const onHandleClick = (id) => {
    const nextCounters = counter.map((c, index) => {
      if (index === id) {
        return c + 1;
      } else {
        return c;
      }
    });
    setCounter(nextCounters);
  };

  return (
    <ul>
      {counter.map((item, idx) => {
        return (
          <li key={idx}>
            {item}
            <button
              onClick={() => {
                onHandleClick(idx);
              }}
            >
              +1
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ReplacingItemsInArray;
