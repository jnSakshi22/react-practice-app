import { Component } from "react";

class ComponentDidMountMethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "This name will change in 5 sec",
    };
  }

  // componentDidMount Method()- This method is called after the component is rendered.
  // You can also use this method to call external data from the API.
  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: "This is a componentDidMount Method" });
    }, 5000);
  }
  render() {
    return (
      <div>
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default ComponentDidMountMethod;
