import { Component } from "react";

class GetSnapshotBeforeUpdateMethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "constructor method",
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: "componentDidMount Method" });
    }, 5000);
  }

  // getSnapshotBeforeUpdate() Method - It is called right before updating the DOM.
  // It has access to props and state before the update.
  // Here you can check what was the value of your props or state before its update.

  // Note: componentDidUpdate() should be included otherwise you will get an error.

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("previous-state").innerHTML =
      "The previous state was " + prevState.name;
  }
  componentDidUpdate() {
    document.getElementById("current-state").innerHTML =
      "The current state is " + this.state.name;
  }
  render() {
    return (
      <div>
        <h5>This is a {this.state.name}</h5>
        <p id="current-state"></p>
        <p id="previous-state"></p>
      </div>
    );
  }
}

export default GetSnapshotBeforeUpdateMethod;
