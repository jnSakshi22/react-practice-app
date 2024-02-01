import { useState } from "react";

const FormValues = () => {
  const [name, setName] = useState("Sakshi");
  const [age, setAge] = useState(26);

  const onHandleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h3>Example 4: Form</h3>
      <input type="text" value={name} onChange={onHandleNameChange} />
      <button
        onClick={() => {
          setAge(age + 2);
        }}
      >
        Increment Age
      </button>
      <p>
        Hey! {name} & You are {age}.
      </p>
    </div>
  );
};

export default FormValues;
