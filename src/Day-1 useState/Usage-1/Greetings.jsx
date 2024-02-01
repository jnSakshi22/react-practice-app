import { useState } from "react";

const Greetings = () => {
  const [name, setName] = useState("Sakshi");

  const onhandleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h3>Example 2: Greetings Message</h3>
      <input type="text" value={name} onChange={onhandleChange} />
      <p>
        <strong>Hey!! {name}</strong>
      </p>
      <button
        onClick={() => {
          setName("Sakshi");
        }}
      >
        Reset Me
      </button>
    </div>
  );
};

export default Greetings;
