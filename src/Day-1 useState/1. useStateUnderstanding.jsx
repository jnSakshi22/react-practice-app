// import { useState } from "react";

// const BasicsofUseState = () => {
//   const [name, setName] = useState("Payal");
//   const [age, setAge] = useState(0);
//   const [todos, setTodos] = useState(() => {
//     createTodos();
//   });

//   // PitFall

//   // Calling the set function does not change the current state in the already executing code:

//   const handleClick = () => {
//     setName("Sakshi");
//     setAge(26);

//     // It only affects what useState will return starting from the next render.
//     console.log("Name", name); // return Payal
//     console.log("Age", age); // return 0
//   };

//   return (
//     <div>
//       <h1>Basics of useState</h1>
//     </div>
//   );
// };

// export default BasicsofUseState;
