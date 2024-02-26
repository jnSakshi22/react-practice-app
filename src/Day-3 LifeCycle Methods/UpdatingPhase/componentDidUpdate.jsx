import { Component } from "react";

class ComponentDidUpdateMethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "from previous state",
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: "to current state" });
    }, 5000);
  }

  //componentDidUpdate() Method - The componentDidUpdate method is called after the component is updated in the DOM.
  // This is the best place in updating the DOM in response to the change of props and state.
  componentDidUpdate(prevState) {
    if (prevState.name !== this.state.name) {
      document.getElementById("statechange").innerHTML =
        "Yes the state is changed";
    }
  }
  render() {
    return (
      <div>
        State was changed {this.state.name}
        <p id="statechange"></p>
      </div>
    );
  }
}

export default ComponentDidUpdateMethod;
