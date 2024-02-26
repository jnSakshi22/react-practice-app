import { Component } from "react";

class ShouldComponentUpdateMethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "shouldComponentUpdate Method",
    };
  }

  // shouldComponentUpdate() Method - It is used when you want your state or props to update or not.
  // This method returns a boolean value that specifies whether rendering should be done or not.
  // The default value is true.
  shouldComponentUpdate() {
    return false; //Change to true for state to update
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: "componentDidMount Method" });
    }, 5000);
  }
  render() {
    return (
      <div>
        <h1>This is a {this.state.name}</h1>
      </div>
    );
  }
}

export default ShouldComponentUpdateMethod;
