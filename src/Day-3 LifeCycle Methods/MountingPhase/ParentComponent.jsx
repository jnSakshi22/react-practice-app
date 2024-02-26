import { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  render() {
    return <ChildComponent nameFromParent="getDerivedStateFromProps Method" />;
  }
}

export default ParentComponent;
