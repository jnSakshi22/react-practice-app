import { Component } from "react";

export class Child extends Component {
  // componentWillUnMount() Method - If there are any cleanup actions like canceling API calls or clearing any caches in storage you can perform that in the componentWillUnmount method.
  // You cannot use setState inside this method as the component will never be re-rendered.
  componentWillUnmount() {
    alert("This will unmount");
  }
  render() {
    return <>I am a child component</>;
  }
}
