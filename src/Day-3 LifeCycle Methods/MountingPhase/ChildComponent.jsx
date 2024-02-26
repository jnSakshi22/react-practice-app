import { Component } from "react";

class ChildComponent extends Component {
  // constructor Method()- It is called when the component is initiated and it’s the best place to initialize our state.
  // It takes props as an argument and starts by calling super(props) before anything else.
  constructor(props) {
    super(props);
    this.state = {
      name: "Constructor Method",
    };
  }

  // getDerivedStateFromProps Method() - It is called right before rendering the element in our DOM. 
  // It takes props and state as an argument and returns an object with changes to the state.

  static getDerivedStateFromProps(props) {
    return { name: props.nameFromParent };
  }

  // render Method() -This is the only compulsory method required by the React. 
  // This method is responsible to render our JSX to DOM.
  render() {
    return (
      <div>
        <h1>This is my {this.state.name}</h1>
      </div>
    );
  }
}

export default ChildComponent;
