import { useState } from "react";

const PassingUpdaterFunc = () => {
  const [age, setAge] = useState(25);

  const onHandleClick = () => {
    setAge((age) => age + 1);
  };

  return (
    <div>
      <h3>Example 1: Passing the Updater Function</h3>
      <p>Age: {age}</p>
      <button
        onClick={() => {
          onHandleClick();
          onHandleClick();
          onHandleClick();
        }}
      >
        Update Me +3
      </button>
      <button onClick={onHandleClick}>Update Me +1</button>
    </div>
  );
};

export default PassingUpdaterFunc;
