import { Component } from "react";
import { Child } from "./ChildComponent";

export default class ComponentWillUnmount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }
  render() {
    return (
      <>
        <p>{this.state.show ? <Child /> : null}</p>
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          Click me to toggle
        </button>
      </>
    );
  }
}
