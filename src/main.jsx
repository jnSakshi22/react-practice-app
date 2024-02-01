import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import Counter from "./Day-1 useState/Counter.jsx";
// import Greetings from "./Day-1 useState/Greetings";
// import CheckedText from "./Day-1 useState/CheckedText";
// import FormValues from "./Day-1 useState/Form2Values";
// import PassingUpdaterFunc from "./Day-1 useState/Usage-2/PassingUpdaterFunction";
import PassingNextState from "./Day-1 useState/Usage-2/PassingNextStateDirectly";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PassingNextState />
  </React.StrictMode>
);
